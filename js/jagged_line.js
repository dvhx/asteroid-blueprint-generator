// Jagged line
"use strict";

var SC = window.SC || {};

SC.jaggedLine = function (aBegin, aEnd, aScale, aDepth, aAttenuation) {
    var vectors = [new Vector(aBegin.x, aBegin.y), new Vector(aEnd.x, aEnd.y)];
    aScale = aScale || .5;
    aDepth = aDepth || 2;
    aAttenuation = aAttenuation || .8;

    function one(i, j, d, sc) {
        var a = new Vector(vectors[i].x, vectors[i].y),
            b = new Vector(vectors[j].x, vectors[j].y),
            ab = b.sub(a).length(),
            mid = new Vector((vectors[i].x + vectors[j].x) / 2, (vectors[i].y + vectors[j].y) / 2),
            pm = mid.sub(new Vector(vectors[i].x, vectors[i].y)).unit(),
            s = pm.right().unit().scale(sc * ab * (Math.random() - Math.random())),
            t = mid.add(s);
        vectors.splice(j, 0, t);
        d++;
        if (d < aDepth) {
            one(i + 1, j + 1, d, aAttenuation * sc);
            one(i, j, d, aAttenuation * sc)
        }
    }
    one(0, 1, 0, aScale);
    this.vectors = vectors
};

SC.jaggedLine.prototype.intersects = function (aVectors, aClosedLine) {
    var l, p, poly = aVectors.slice();
    if (aClosedLine) {
        poly.push(poly[0])
    }
    for (l = 1; l < this.vectors.length; l++) {
        for (p = 1; p < poly.length; p++) {
            if (lineSegmentIntersection(this.vectors[l - 1].x, this.vectors[l - 1].y, this.vectors[l].x, this.vectors[l].y, poly[p - 1].x, poly[p - 1].y, poly[p].x, poly[p].y)) {
                return true
            }
        }
    }
    return false
};
