// Various functions
"use strict";

var SC = window.SC || {};

SC.randomItem = function (aArray) {
    return aArray[Math.floor(Math.random() * aArray.length)];
};

SC.nearby = function (aPos, aDistance) {
    var angle = 2 * Math.PI * Math.random(),
        d = aDistance || 100,
        v = new Vector(aPos.x + d * Math.sin(angle), aPos.y + d * Math.cos(angle));
    return v
};

SC.radToDeg = function (aRadians) {
    return 180 * aRadians / Math.PI
};

SC.degToRad = function (aDegrees) {
    return Math.PI * aDegrees / 180
};

SC.spreadValues = function (aValues) {
    var i, j, left, right, avg, n = [];
    for (i = 0; i < aValues.length; i++) {
        left = -Number.MAX_VALUE;
        right = Number.MAX_VALUE;
        for (j = 0; j < aValues.length; j++) {
            if (i === j) {
                continue
            }
            if (aValues[j] < aValues[i] && aValues[j] > left) {
                left = aValues[j]
            }
            if (aValues[j] > aValues[i] && aValues[j] < right) {
                right = aValues[j]
            }
        }
        if (left === -Number.MAX_VALUE) {
            left = undefined
        }
        if (right === Number.MAX_VALUE) {
            right = undefined
        }
        if (left !== undefined && right !== undefined) {
            avg = (left + right) / 2;
            n[i] = (aValues[i] + avg) / 2
        } else {
            n[i] = aValues[i]
        }
    }
    return n
};
