// Main window
"use strict";
// globals: window, document, Vector, Voronoi

var SC = window.SC || {};

SC.blueprintFont = new FontFace("blueprint", "url(font/blueprint.ttf)");
SC.blueprintFont.load().then(function (aFont) {
    document.fonts.add(aFont)
}, function (e) {
    console.error("cannot load blueprint font", e)
});

SC.one = function () {
    // generate and render one asteroid blueprint
    SC.a = SC.asteroidBlueprint(15, SC.v);
    SC.a.render();
};

// initialize window
window.addEventListener('DOMContentLoaded', function () {
    // main viewport
    SC.v = new SC.canvas('canvas');
    // create first
    SC.one();
    window.addEventListener('resize', SC.a.render);
    // regenerate on touch or doubleclick
    window.addEventListener('touchstart', SC.one);
    window.addEventListener('dblclick', SC.one);
});

