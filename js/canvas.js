// Canvas handler
"use strict";

var SC = SC || {};

SC.canvas = function (aCanvasOrId) {
    var t = this;
    t.canvas = typeof aCanvasOrId === "string" ? document.getElementById(aCanvasOrId) : aCanvasOrId;
    t.context = t.canvas.getContext("2d");
    window.addEventListener("resize", function () {
        t.onResize()
    });
    this.onResize()
};

SC.canvas.prototype.onResize = function () {
    this.w = this.canvas.clientWidth;
    this.h = this.canvas.clientHeight;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.canvas.width = this.w;
    this.canvas.height = this.h
};

SC.canvas.prototype.clear = function () {
    this.context.clearRect(0, 0, this.w, this.h)
};
