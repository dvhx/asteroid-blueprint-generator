// Parts legend
"use strict";

SC.partsLegend = function (aCanvas, aCenter, aTop, aPoints, aLabels, aOutline, aBorder) {
    var i, s, r, io, io2, io3, radius = aTop.sub(aCenter).length(),
        lw, lw2, s1, reg, angles = [],
        x, tx, points = aPoints.slice(),
        labels = aLabels.slice(),
        big_font = aCanvas.w < 320 ? 16 : 22,
        small_font = aCanvas.w < 320 ? 12 : 16;

    function findIntersectionWithOutline(aPoint1, aPoint2) {
        var p, poly = aOutline.slice(),
            z;
        poly.push(poly[0]);
        for (p = 1; p < poly.length; p++) {
            z = lineSegmentIntersection(aPoint1.x, aPoint1.y, aPoint2.x, aPoint2.y, poly[p - 1].x, poly[p - 1].y, poly[p].x, poly[p].y);
            if (z) {
                return new Vector(z.x, z.y)
            }
        }
        return false
    }
    reg = aCenter.clone();
    reg.x += radius;
    reg.y += radius;
    reg = findIntersectionWithOutline(reg, aCenter);
    s = reg.sub(aCenter).scale(-.1);
    points.push(reg.add(s));
    labels.push("Regolith");
    for (i = 0; i < points.length; i++) {
        s = aCenter.sub(points[i]).unit();
        angles[i] = Math.atan2(s.y, s.x)
    }

    function debugAngles(y) {
        aCanvas.context.fillStyle = "red";
        for (i = 0; i < angles.length; i++) {
            x = 400 - angles[i] * 100;
            aCanvas.context.fillRect(x, y, 3, 3)
        }
    }
    for (i = 0; i < 20; i++) {
        angles = SC.spreadValues(angles)
    }
    aCanvas.context.textAlign = "left";
    aCanvas.context.textBaseline = "bottom";
    aCanvas.context.lineWidth = 1;
    for (i = 0; i < points.length; i++) {
        s = new Vector(Math.cos(angles[i]), Math.sin(angles[i]));
        r = aCenter.add(s.unit().scale(-2 * radius));
        io = findIntersectionWithOutline(aCenter, r);
        if (!io) {
            console.warn("No intersection with outline", aCenter, r);
            continue
        }
        io2 = io.add(s.unit().scale(-50));
        aCanvas.context.font = big_font + "px blueprint";
        s1 = SC.mineralSummary(labels[i], 2, SC.skipMinerals);
        lw = aCanvas.context.measureText(labels[i]).width;
        aCanvas.context.font = small_font + "px blueprint";
        lw2 = aCanvas.context.measureText(s1).width;
        lw = Math.max(lw, lw2);
        io3 = io2.clone();
        io3.x += io3.x > aCenter.x ? lw + 5 : -lw - 5;
        tx = Math.min(io2.x, io3.x);
        if (io2.x < points[i].x && io3.x > points[i].x) {
            tx += points[i].x - io2.x;
            io3.x += points[i].x - io2.x;
            io2.x += points[i].x - io2.x
        }
        if (io2.x < aBorder + 2) {
            io3.x += Math.abs(io2.x);
            io2.x = aBorder + 2
        }
        if (io3.x < aBorder + 2) {
            io2.x += Math.abs(io3.x);
            io3.x = aBorder + 2
        }
        if (tx < aBorder + 2) {
            tx = aBorder + 2
        }
        if (io2.x + lw > aCanvas.w - 2 * aBorder) {
            io2.x -= io2.x + lw - (aCanvas.w - 2 * aBorder);
            tx = aCanvas.w - aBorder - lw - 2
        }
        if (io3.x > aCanvas.w - 2 * aBorder) {
            io3.x = aCanvas.w - 2 * aBorder - 2
        }
        aCanvas.context.lineWidth = .5;
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(points[i].x, points[i].y);
        aCanvas.context.lineTo(io2.x, io2.y);
        aCanvas.context.lineTo(io3.x, io3.y);
        aCanvas.context.stroke();
        aCanvas.context.font = big_font + "px blueprint";
        aCanvas.context.fillStyle = "white";
        aCanvas.context.textBaseline = "bottom";
        aCanvas.context.fillText(labels[i], tx, io2.y);
        aCanvas.context.font = small_font + "px blueprint";
        aCanvas.context.textBaseline = "top";
        aCanvas.context.fillText(s1, tx, io2.y + 2)
    }
    angles = SC.spreadValues(angles);
    aCanvas.context.strokeStyle = "white";
    aCanvas.context.lineWidth = 1;
    for (i = 0; i < 12; i++) {
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(aCanvas.w * i / 12, 0);
        aCanvas.context.lineTo(aCanvas.w * i / 12, aBorder);
        aCanvas.context.stroke();
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(aCanvas.w * i / 12, aCanvas.h);
        aCanvas.context.lineTo(aCanvas.w * i / 12, aCanvas.h - aBorder);
        aCanvas.context.stroke();
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(0, aCanvas.h * i / 12);
        aCanvas.context.lineTo(aBorder, aCanvas.h * i / 12);
        aCanvas.context.stroke();
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(aCanvas.w, aCanvas.h * i / 12);
        aCanvas.context.lineTo(aCanvas.w - aBorder, aCanvas.h * i / 12);
        aCanvas.context.stroke()
    }

    function rect(aLeft, aTop, aWidth, aHeight) {
        aCanvas.context.beginPath();
        aCanvas.context.moveTo(aLeft, aTop);
        aCanvas.context.lineTo(aLeft + aWidth, aTop);
        aCanvas.context.lineTo(aLeft + aWidth, aTop + aHeight);
        aCanvas.context.lineTo(aLeft, aTop + aHeight);
        aCanvas.context.closePath();
        aCanvas.context.stroke()
    }
    rect(0, 0, aCanvas.w, aCanvas.h);
    rect(aBorder, aBorder, aCanvas.w - 2 * aBorder, aCanvas.h - 2 * aBorder)
};
"use strict";
var SC = window.SC || {};
SC.spectrum = function (aContext, aLeft, aTop, aWidth, aHeight, aMinerals) {
    var total = {},
        m, e, arr = [],
        max = 0,
        i, x, y, z, s, lastX, border = .03 * aWidth;
    aLeft += border;
    aWidth -= 2 * border;
    for (m = 0; m < aMinerals.length; m++) {
        for (e in SC.minerals[aMinerals[m]]) {
            if (SC.minerals[aMinerals[m]].hasOwnProperty(e)) {
                total[e] = total[e] || 0;
                total[e] += SC.minerals[aMinerals[m]][e];
                if (total[e] > max) {
                    max = total[e]
                }
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (SC.elements.hasOwnProperty(arr[i].element)) {
            arr[i].z = parseInt(SC.elements[arr[i].element].z, 10)
        } else {
            arr[i].z = undefined
        }
    }
    for (e in total) {
        if (total.hasOwnProperty(e)) {
            z = SC.elements.hasOwnProperty(e) ? parseInt(SC.elements[e].z, 10) : 0;
            arr.push({
                element: e,
                symbol: SC.elements[e] ? SC.elements[e].symbol : e,
                ratio: total[e] / max,
                z: z
            })
        }
    }
    arr.sort(function (a, b) {
        return a.z - b.z
    });
    aContext.fillStyle = "white";
    aContext.lineWidth = 1;
    aContext.strokeStyle = "white";
    aContext.beginPath();
    aContext.moveTo(aLeft, aTop);
    aContext.lineTo(aLeft, aTop + aHeight);
    aContext.lineTo(aLeft + aWidth, aTop + aHeight);
    aContext.stroke();
    aContext.beginPath();
    aContext.moveTo(aLeft - 5, aTop + 16);
    aContext.lineTo(aLeft + 5, aTop + 16);
    aContext.stroke();
    aContext.font = "14px blueprint";
    aContext.textBaseline = "middle";
    aContext.textAlign = "right";
    aContext.fillText("1", aLeft - 5, aTop + 14);
    aContext.fillText("0", aLeft - 5, aTop + aHeight);
    aContext.textAlign = "center";
    aContext.textBaseline = "top";
    aContext.fillText("0", aLeft, aTop + aHeight);
    aContext.textAlign = "right";
    aContext.fillText("10eV", aLeft + aWidth, aTop + aHeight);
    aContext.beginPath();
    aContext.moveTo(aLeft, aTop + aHeight);
    for (i = 0; i < arr.length; i++) {
        x = aLeft + aWidth * arr[i].z / 100;
        y = aTop + aHeight - arr[i].ratio * (aHeight - 16);
        if (x - 5 > 0) {
            aContext.lineTo(x - 5, aTop + aHeight)
        }
        aContext.lineTo(x, y);
        aContext.lineTo(x + 5, aTop + aHeight)
    }
    aContext.lineTo(aLeft + aWidth, aTop + aHeight);
    aContext.closePath();
    aContext.fill();
    aContext.beginPath();
    aContext.moveTo(aLeft, aTop + aHeight);
    for (i = 0; i < 100; i++) {
        x = aLeft + aWidth * i / 100;
        y = aTop + aHeight - .07 * Math.random() * (aHeight - 16);
        if (x - 5 > 0) {
            aContext.lineTo(x - 5, aTop + aHeight)
        }
        aContext.lineTo(x, y);
        aContext.lineTo(x + 5, aTop + aHeight)
    }
    aContext.lineTo(aLeft + aWidth, aTop + aHeight);
    aContext.closePath();
    aContext.fill();
    aContext.font = "16px blueprint";
    aContext.textAlign = "center";
    aContext.textBaseline = "bottom";
    lastX = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].ratio >= .1) {
            s = arr[i].symbol;
            if (s === "Water") {
                s = "H2O";
                arr[i].z = 60
            }
            x = aLeft + aWidth * arr[i].z / 100;
            y = aTop + aHeight - arr[i].ratio * (aHeight - 16);
            if (x - lastX < 10) {
                y -= 15
            }
            aContext.fillText(s, x, y);
            lastX = x
        }
    }
    return {
        left: aLeft,
        top: aTop,
        width: aWidth,
        height: aHeight
    }
};
