// Asteroid blueprint generator
"use strict";

var SC = window.SC || {};

SC.asteroidBlueprint = function (aMineralsCount, aCanvas) {
    // Asteroid blueprint generator
    var self = {},
        minCircle = {
            x: 0,
            y: 0,
            r: 0
        };
    self.points = [];
    self.centers = [];
    self.coreCenters = [];
    self.corePolygons = [];

    function addJaggedLines(aPolygon) {
        var i, scale = .5,
            depth = 3,
            attenuation = .8;
        self.jagged = [];
        for (i = 1; i < aPolygon.length; i++) {
            self.jagged.push(new SC.jaggedLine(aPolygon[i - 1], aPolygon[i], scale, depth, attenuation))
        }
        self.jagged.push(new SC.jaggedLine(aPolygon[aPolygon.length - 1], aPolygon[0], scale, depth, attenuation))
    }

    function jaggedLinesCrossesCore(aLine) {
        var i;
        for (i = 0; i < self.corePolygons.length; i++) {
            if (aLine.intersects(self.corePolygons[i], true)) {
                return true
            }
        }
        return false
    }

    function moveFurther(aPolygon, aRadius) {
        addJaggedLines(aPolygon);
        var f, c1, c2, center = new Vector(minCircle.x, minCircle.y),
            p, s, bad = 0,
            f1, f2;
        for (f = 0; f < aPolygon.length - 1; f++) {
            if (f === 0) {
                f1 = 0;
                f2 = aPolygon.length - 1
            } else {
                f1 = f;
                f2 = f + 1
            }
            c1 = jaggedLinesCrossesCore(self.jagged[f1]);
            c2 = jaggedLinesCrossesCore(self.jagged[f2]);
            if (c1 || c2) {
                bad++
            }
            p = new Vector(aPolygon[f1].x, aPolygon[f1].y);
            s = center.clone().sub(p).unit();
            if (center.sub(aPolygon[f1]).length() < aRadius) {
                aPolygon[f1] = p.add(s.scale(c1 || c2 ? -.1 : -.01))
            }
            if (center.sub(aPolygon[f2]).length() < aRadius) {
                p = new Vector(aPolygon[f2].x, aPolygon[f2].y);
                s = center.clone().sub(p).unit();
                aPolygon[f2] = p.add(s.scale(c1 || c2 ? -.1 : -.01))
            }
        }
        return bad
    }

    function moveFurtherZero(aPolygon, aRadius) {
        var i, r;
        for (i = 0; i < 10; i++) {
            r = moveFurther(aPolygon, aRadius);
            if (r === 0) {
                break
            }
        }
        self.valid = r <= 0;
        return r
    }

    function addPoints(aCount) {
        var i, j, d, x, y, mx, my, mm, dx, dy, md, n, voronoi, vor, border, po, m;
        for (i = 0; i < aCount; i++) {
            n = 0;
            mm = 0;
            do {
                md = 1e9;
                x = Math.random() - Math.random();
                y = Math.random() - Math.random();
                for (j = 0; j < self.points.length; j++) {
                    dx = x - self.points[j].x;
                    dy = y - self.points[j].y;
                    d = Math.sqrt(dx * dx + dy * dy);
                    if (d < md) {
                        md = d
                    }
                }
                if (md > mm) {
                    mx = x;
                    my = y;
                    mm = md
                }
                n++;
                if (n >= 10) {
                    break
                }
            } while (md < .1);
            self.points.push({
                x: mx,
                y: my,
                d: mm,
                n: n
            })
        }
        if (SC.fixedPoints) {
            self.points = SC.fixedPoints
        }
        SC.lastPoints = self.points;
        voronoi = new Voronoi;
        vor = voronoi.compute(self.points, {
            xl: -1,
            xr: 1,
            yt: -1,
            yb: 1
        });
        self.polygons = [];
        for (i = 0; i < vor.cells.length; i++) {
            self.polygons[i] = SC.voronoiCell(vor, i);
            self.centers[i] = vor.cells[i].site
        }
        self.corePolygons = [];
        for (i = 0; i < self.polygons.length; i++) {
            border = false;
            for (j = 0; j < self.polygons[i].length; j++) {
                if (self.polygons[i][j].border) {
                    border = true;
                    break
                }
            }
            if (!border) {
                self.corePolygons.push(self.polygons[i]);
                self.coreCenters.push(self.centers[i])
            }
        }
        po = SC.polygonsOutline(self.corePolygons);
        minCircle = po.minCircle;
        self.radius = po.minCircle.r;
        moveFurtherZero(po.furthest, 1.1 * self.radius);
        self.coreMinerals = [];
        m = Object.keys(SC.minerals);
        for (i = 0; i < self.coreCenters.length; i++) {
            self.coreMinerals.push(m[Math.floor(Math.random() * m.length)])
        }
        self.details = SC.randomAsteroidDetails()
    }
    addPoints(aMineralsCount || 15);

    (function () {
        var i, j, e, min, max, range = new Vector(0, 0),
            scale, coreCenters2, corePolygons2, jagged2;
        self.center = new Vector(minCircle.x, minCircle.y);
        coreCenters2 = [];
        for (i = 0; i < self.coreCenters.length; i++) {
            coreCenters2[i] = new Vector(self.coreCenters[i].x - self.center.x, self.coreCenters[i].y - self.center.y)
        }
        corePolygons2 = [];
        for (i = 0; i < self.corePolygons.length; i++) {
            corePolygons2[i] = [];
            for (j = 0; j < self.corePolygons[i].length; j++) {
                corePolygons2[i][j] = new Vector(self.corePolygons[i][j].x - self.center.x, self.corePolygons[i][j].y - self.center.y)
            }
        }
        jagged2 = [];
        for (i = 0; i < self.jagged.length; i++) {
            for (j = 0; j < self.jagged[i].vectors.length; j++) {
                jagged2.push(new Vector(self.jagged[i].vectors[j].x - self.center.x, self.jagged[i].vectors[j].y - self.center.y))
            }
        }
        min = new Vector(1e9, 1e9);
        max = new Vector(-1e9, -1e9);
        for (i = 0; i < jagged2.length; i++) {
            e = jagged2[i];
            if (e.x < min.x) {
                min.x = e.x
            }
            if (e.y < min.y) {
                min.y = e.y
            }
            if (e.x > max.x) {
                max.x = e.x
            }
            if (e.y > max.y) {
                max.y = e.y
            }
        }
        range = Math.max(-min.x, -min.y, max.x, max.y);
        scale = .5 / range;
        for (i = 0; i < coreCenters2.length; i++) {
            coreCenters2[i] = coreCenters2[i].scale(scale)
        }
        for (i = 0; i < jagged2.length; i++) {
            jagged2[i] = jagged2[i].scale(scale)
        }
        for (i = 0; i < corePolygons2.length; i++) {
            for (j = 0; j < corePolygons2[i].length; j++) {
                corePolygons2[i][j] = corePolygons2[i][j].scale(scale)
            }
        }
        self.center = new Vector(0, 0);
        self.coreCenters = coreCenters2;
        self.corePolygons = corePolygons2;
        self.jagged = jagged2
    })();

    function internalRender() {
        var i, top, pp, vertical = aCanvas.w < aCanvas.h,
            border = vertical ? 8 : 15,
            table, spectrum, rock;
        aCanvas.context.fillStyle = "#2D3762";
        aCanvas.context.fillRect(0, 0, aCanvas.w, aCanvas.h);
        if (vertical) {
            table = SC.renderAsteroidDetails(aCanvas.context, border, aCanvas.h - border - .15 * aCanvas.h, aCanvas.w - 2 * border, .15 * aCanvas.h, self.details);
            spectrum = SC.spectrum(aCanvas.context, table.left, table.top - aCanvas.h * .15 - border, table.width, aCanvas.h * .15 - border, self.coreMinerals)
        } else {
            table = SC.renderAsteroidDetails(aCanvas.context, aCanvas.w / 2, aCanvas.h - border - aCanvas.h * .15, aCanvas.w / 2 - border, aCanvas.h * .15, self.details);
            spectrum = SC.spectrum(aCanvas.context, 2 * border, aCanvas.h - 2 * border - aCanvas.h * .15, .5 * aCanvas.w - 2 * border, aCanvas.h * .15, self.coreMinerals)
        }
        aCanvas.context.font = "22px blueprint";
        aCanvas.context.textBaseline = "top";
        aCanvas.context.textAlign = "center";
        aCanvas.context.fillText(self.details.Name, aCanvas.w / 2, 15);
        aCanvas.context.font = "16px blueprint";
        aCanvas.context.fillText(self.details.Discoverer, aCanvas.w / 2, 35);
        rock = {};
        rock.left = border;
        rock.top = border + 35 + 22;
        rock.width = aCanvas.w - 2 * border;
        if (vertical) {
            rock.height = aCanvas.h - spectrum.height - table.height - border - rock.top - 2 * border
        } else {
            rock.height = aCanvas.h - Math.max(spectrum.height, table.height) - border - rock.top - 2 * border
        }
        aCanvas.context.fillStyle = "#00ff0077";

        function t2(v) {
            var s = Math.min(rock.width / 2, rock.height / 2);
            return new Vector(rock.left + rock.width / 2 + s * v.x, rock.top + rock.height / 2 + s * v.y)
        }
        aCanvas.context.lineWidth = 1;
        aCanvas.context.fillStyle = "white";
        for (i = 0; i < self.coreCenters.length; i++) {
            pp = t2(self.coreCenters[i]);
            aCanvas.context.fillRect(pp.x - 4 / 2, pp.y - 4 / 2, 4, 4)
        }
        aCanvas.context.lineWidth = 1;
        for (i = 0; i < self.corePolygons.length; i++) {
            SC.renderPolygon(aCanvas.context, self.corePolygons[i].map(t2), "white", "transparent")
        }
        SC.renderPolygon(aCanvas.context, self.jagged.map(t2), "white");
        aCanvas.context.lineWidth = 2;
        top = t2(new Vector(self.center.x, self.center.y - minCircle.r));
        SC.partsLegend(aCanvas, t2(self.center), top, self.coreCenters.map(t2), self.coreMinerals, self.jagged.map(t2), border);
        for (i = 0; i < self.corePolygons.length; i++) {
            SC.hatchPolygon(aCanvas.canvas, aCanvas.context, self.corePolygons[i].map(t2), i)
        }
    }
    self.render = function () {
        SC.blueprintFont.load().then(internalRender, internalRender)
    };
    delete self.centers;
    delete self.points;
    delete self.polygons;
    return self
};

