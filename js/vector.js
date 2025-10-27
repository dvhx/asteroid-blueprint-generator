// Simple 2D vector library
"use strict";

function Vector(aX, aY) {
    this.x = aX || 0;
    this.y = aY || 0
}

Vector.prototype.clone = function () {
    return new Vector(this.x, this.y)
};

Vector.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};

Vector.prototype.add = function (aVector) {
    return new Vector(this.x + aVector.x, this.y + aVector.y)
};

Vector.prototype.sub = function (aVector) {
    return new Vector(this.x - aVector.x, this.y - aVector.y)
};

Vector.prototype.scale = function (aKoef) {
    return new Vector(this.x * aKoef, this.y * aKoef)
};

Vector.prototype.neg = function () {
    return new Vector(-this.x, -this.y)
};

Vector.prototype.right = function () {
    return new Vector(this.y, -this.x)
};

Vector.prototype.left = function () {
    return new Vector(-this.y, this.x)
};

Vector.prototype.str = function (aDigits) {
    return "[" + this.x.toFixed(aDigits || 0) + "," + this.y.toFixed(aDigits || 0) + "]"
};

Vector.prototype.unit = function () {
    var d = this.length();
    if (d !== 0) {
        return new Vector(this.x / d, this.y / d)
    }
    return new Vector(1, 0)
};

Vector.prototype.angle = function (aOther) {
    var a = this.clone().unit(),
        b, angle = Math.atan2(a.y, a.x);
    if (aOther) {
        b = aOther.clone().unit();
        angle = angle - Math.atan2(b.y, b.x);
        if (angle < -Math.PI) {
            angle += 2 * Math.PI
        }
        if (angle > Math.PI) {
            angle -= 2 * Math.PI
        }
    }
    return angle
};

Vector.prototype.target = function (aTarget) {
    return new Vector(aTarget.x - this.x, aTarget.y - this.y)
};
