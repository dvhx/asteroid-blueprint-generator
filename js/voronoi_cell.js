// Voronoi cell
"use strict";

var SC = window.SC || {};

SC.voronoiCell = function (aVoronoi, aVoronoiId) {
    var edges = [],
        i, o = [],
        one, next, freeze = 0;
    for (i = 0; i < aVoronoi.edges.length; i++) {
        if (aVoronoi.edges[i].lSite && aVoronoi.edges[i].lSite.voronoiId === aVoronoiId || aVoronoi.edges[i].rSite && aVoronoi.edges[i].rSite.voronoiId === aVoronoiId) {
            edges.push({
                a: {
                    x: aVoronoi.edges[i].va.x,
                    y: aVoronoi.edges[i].va.y
                },
                b: {
                    x: aVoronoi.edges[i].vb.x,
                    y: aVoronoi.edges[i].vb.y
                }
            })
        }
    }
    one = edges.pop();
    o.push(one.a);
    o.push(one.b);
    next = one.b;
    i++;
    while (edges.length > 0) {
        for (i = 0; i < edges.length; i++) {
            if (Math.abs(edges[i].a.x - next.x) < 1e-10 && Math.abs(edges[i].a.y - next.y) < 1e-10) {
                next = edges[i].b;
                o.push(next);
                edges.splice(i, 1);
                break
            }
            if (Math.abs(edges[i].b.x - next.x) < 1e-10 && Math.abs(edges[i].b.y - next.y) < 1e-10) {
                next = edges[i].a;
                o.push(next);
                edges.splice(i, 1);
                break
            }
        }
        freeze++;
        if (freeze >= 1e3) {
            console.error("e", edges, "next", next, "o", o, "aEdges", JSON.stringify(edges, undefined, 1));
            throw "SC.voronoiCell failed"
        }
    }
    o[i].border = false;
    for (i = 0; i < o.length; i++) {
        o[i].border = o[i].x === -1 || o[i].y === -1 || o[i].x === 1 || o[i].y === 1;
        if (o[i].border) {
            o[i].border = true
        }
    }
    return o
};
