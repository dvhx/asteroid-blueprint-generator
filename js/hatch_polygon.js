// Polygon hatching
"use strict";

var SC = window.SC || {};

SC.hatchPolygon = function (aCanvas, aContext, aPolygon, aKind) {
    var i, d, x, y, canvas = document.createElement("canvas"),
        context = canvas.getContext("2d"),
        w = aCanvas.width,
        h = aCanvas.height;
    canvas.width = w;
    canvas.height = h;
    context.fillStyle = "white";
    context.strokeStyle = "white";
    context.lineWidth = 1;
    context.globalAlpha = .5;
    context.setLineDash([]);
    if (aKind === 0 || aKind === 6) {
        if (aKind === 6) {
            context.setLineDash([5, 10])
        }
        d = h / 100;
        for (i = 0; i < h / d; i++) {
            context.beginPath();
            context.moveTo(0 + (i % 2 === 0 ? 5 : 0), i * w / 100);
            context.lineTo(w, i * w / 100);
            context.stroke()
        }
    }
    if (aKind === 1 || aKind === 3) {
        if (aKind === 3) {
            context.setLineDash([5, 10])
        }
        d = h / 100;
        for (i = 0; i < w / d; i++) {
            context.beginPath();
            context.moveTo(i * h / 100, 0 + (i % 2 === 0 ? 5 : 0));
            context.lineTo(i * h / 100, h);
            context.stroke()
        }
    }
    if (aKind === 2) {
        for (x = .5; x < w; x += 8) {
            for (y = .5; y < h; y += 8) {
                context.beginPath();
                context.moveTo(x, y);
                context.lineTo(x + 4, y);
                context.lineTo(x + 4, y + 4);
                context.lineTo(x, y + 4);
                context.closePath();
                context.stroke()
            }
        }
    }
    if (aKind === 7) {
        for (x = 0; x < w; x += 16) {
            for (y = 0; y < h; y += 16) {
                context.beginPath();
                context.arc(x, y + (x % 32 === 0 ? 8 : 0), .005 * h, 0, 6.28);
                context.stroke()
            }
        }
    }
    if (aKind === 8) {
        for (x = 0; x < w; x += 10) {
            for (y = 0; y < h; y += 16) {
                context.beginPath();
                context.arc(x, y, .005 * h, 1.57, 3.14 + 1.57);
                context.stroke()
            }
        }
    }
    if (aKind === 4) {
        d = h / 500;
        for (i = 0; i < w / d; i++) {
            context.beginPath();
            context.moveTo(i * h / 100, 0);
            context.lineTo(i * h / 100 - w, h);
            context.stroke();
            context.moveTo(i * h / 100, 0);
            context.lineTo(i * h / 100 + w / 2, h);
            context.stroke()
        }
    }
    if (aKind === 5) {
        d = h / 500;
        context.setLineDash([1, 8]);
        for (i = 0; i < w / d; i++) {
            context.beginPath();
            context.moveTo(i * h / 100, 0);
            context.lineTo(i * h / 100, h);
            context.stroke()
        }
    }
    context.globalAlpha = 1;
    context.globalCompositeOperation = "source-in";
    context.beginPath();
    for (i = 0; i < aPolygon.length; i++) {
        if (i === 0) {
            context.moveTo(aPolygon[i].x, aPolygon[i].y)
        } else {
            context.lineTo(aPolygon[i].x, aPolygon[i].y)
        }
    }
    context.closePath();
    context.fill();
    aContext.drawImage(canvas, 0, 0)
};
