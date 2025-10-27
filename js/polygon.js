// Various polygon functions
"use strict";

var SC = window.SC || {};

SC.renderPolygon = function (aContext, aVectors, aColor, aFill, aClosePath) {
    var j, pp;
    if (aColor) {
        aContext.strokeStyle = aColor
    }
    if (aFill) {
        aContext.fillStyle = aFill
    }
    aContext.beginPath();
    for (j = 0; j < aVectors.length; j++) {
        pp = aVectors[j];
        if (j === 0) {
            aContext.moveTo(pp.x, pp.y)
        } else {
            aContext.lineTo(pp.x, pp.y)
        }
    }
    if (aFill || aClosePath) {
        aContext.closePath()
    }
    if (aFill) {
        aContext.fill()
    }
    aContext.stroke()
};

SC.polygonsOutline = function (aPolygons) {
    var f = [],
        furthest, c = {
            x: 0,
            y: 0
        },
        i, j, angle = 0,
        d = {},
        p, u, v, md, dis, dx, dy, rays = [],
        minCircle, flat;
    flat = [];
    for (i = 0; i < aPolygons.length; i++) {
        for (j = 0; j < aPolygons[i].length; j++) {
            flat.push(aPolygons[i][j])
        }
    }
    minCircle = smallestEnclosingCircle(flat);
    c.x = minCircle.x;
    c.y = minCircle.y;
    for (angle = 0; angle < 360; angle += 10) {
        md = 0;
        d.x = c.x + minCircle.r * Math.cos(Math.PI * angle / 180);
        d.y = c.y + minCircle.r * Math.sin(Math.PI * angle / 180);
        furthest = {
            x: d.x,
            y: d.y
        };
        md = 0;
        for (i = 0; i < aPolygons.length; i++) {
            for (j = 1; j < aPolygons[i].length; j++) {
                u = aPolygons[i][j - 1];
                v = aPolygons[i][j];
                p = lineSegmentIntersection(c.x, c.y, d.x, d.y, u.x, u.y, v.x, v.y);
                if (p) {
                    dx = p.x - c.x;
                    dy = p.y - c.y;
                    dis = Math.sqrt(dx * dx + dy * dy);
                    if (dis > md) {
                        md = dis;
                        furthest = p
                    }
                }
            }
        }
        furthest.angle = angle;
        rays.push({
            c: c,
            d: d,
            p: p,
            angle: angle,
            furthest: furthest
        });
        f.push(furthest)
    }
    return {
        rays: rays,
        furthest: f,
        minCircle: minCircle
    }
};
