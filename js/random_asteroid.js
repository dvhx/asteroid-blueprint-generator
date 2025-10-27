// Random asteroid
"use strict";

SC.randomAsteroidDetails = function () {
    var d = {};
    d.Name = "Asteroid-" + Math.round(9999 + 9e4 * Math.random());
    d.Discoverer = SC.randomSpaceCompany();
    d.OrbitalPeriod = 2.5 + Math.random(3);
    d.Perihelion = 2 + Math.random() * 2;
    d.Aphelion = d.Perihelion + Math.random(2);
    d.Eccentricity = .2 * Math.random();
    d.SemiMajorAxis = (d.Perihelion + d.Aphelion) / 2;
    d.MeanRadius = 100 + 12e4 * Math.random();
    d.SurfaceArea = 4 * Math.PI * d.MeanRadius * d.MeanRadius;
    d.Volume = 4 * Math.PI * d.MeanRadius * d.MeanRadius * d.MeanRadius / 3;
    d.MeanDensity = 1.5 + 4 * Math.random();
    d.Mass = d.MeanDensity * d.Volume;
    d.SurfaceGravity = d.Mass / 1e17;
    d.EscapeVelocity = d.SurfaceGravity * (10 * Math.random());
    d.RotationPeriod = 1 + 24 * Math.random();
    d.GeometricAlbedo = .1 + .8 * Math.random();
    d.SpectralType = "C,G,D,F,T,B,S,V,A,Q,R,X,P,E,M";
    d.SpectralType = d.SpectralType.split(",");
    d.SpectralType = d.SpectralType[Math.floor(d.SpectralType.length * Math.random())];
    return d
};

SC.renderAsteroidDetails = function (aContext, aLeft, aTop, aWidth, aHeight, aDetails) {
    var x, y, yc, lh = aHeight / 4,
        lt, lc, lb, pass, render = false,
        offset;
    aContext.fillStyle = "white";
    aContext.strokeStyle = "white";

    function v() {
        if (render) {
            aContext.beginPath();
            aContext.moveTo(x, y + lt);
            aContext.lineTo(x, y + lb);
            aContext.stroke()
        }
    }

    function t(aLabel) {
        var lw = aContext.measureText(aLabel).width;
        if (x + lw + 20 > aLeft + aWidth) {
            if (render) {
                aContext.beginPath();
                aContext.moveTo(aLeft, y + lb);
                aContext.lineTo(aLeft + aWidth, y + lb);
                aContext.stroke()
            }
            x = aLeft;
            y += lh
        } else {
            if (x > aLeft) {
                v()
            }
        }
        if (render) {
            aContext.fillText(aLabel, x + 10, y + lc)
        }
        x += lw + 20
    }

    function exp(aValue) {
        if (aValue >= 1 && aValue < 10) {
            return aValue.toFixed(1)
        }
        if (aValue >= 10 && aValue < 1e4) {
            return aValue.toFixed(0)
        }
        if (aValue >= .01 && aValue < 1) {
            return aValue.toFixed(2)
        }
        var e = 0,
            d = aValue > 10 ? 10 : .1,
            n = aValue > 10 ? 1 : -1,
            u = "⁰¹²³⁴⁵⁶⁷⁸⁹";
        u = u.split("");
        while (aValue > 10 || aValue < 1) {
            aValue /= d;
            e += n
        }
        d = e < 0 ? "⁻" : "";
        e = Math.abs(e).toString().split("");
        for (n = 0; n < e.length; n++) {
            e[n] = u[e[n]]
        }
        return aValue.toFixed(1).replace(".0", "") + "×10" + d + e.join("")
    }
    for (pass = 0; pass < 2; pass++) {
        x = aLeft;
        y = 0;
        lt = aTop;
        lc = aTop + lh / 2;
        lb = aTop + lh;
        aContext.font = Math.floor(.7 * lh) + "px blueprint";
        aContext.textBaseline = "middle";
        aContext.textAlign = "left";
        render = pass === 1;
        t("Mass " + exp(aDetails.Mass) + " Kg");
        t("Peri " + exp(aDetails.Perihelion) + " AU");
        t("Aph " + exp(aDetails.Aphelion) + " AU");
        t("a " + exp(aDetails.SemiMajorAxis) + " AU");
        t("Ecc " + exp(aDetails.Eccentricity));
        t("Albedo " + exp(aDetails.GeometricAlbedo));
        t("Surface " + exp(aDetails.SurfaceArea) + " m²");
        t("Volume " + exp(aDetails.Volume) + " m³");
        t("ρ " + exp(aDetails.MeanDensity) + " Kg/m³");
        t("R " + exp(aDetails.MeanRadius) + "m");
        t("Y " + exp(aDetails.OrbitalPeriod * 365) + " days");
        t("T " + exp(aDetails.RotationPeriod) + "h");
        t("Spectral type " + aDetails.SpectralType);
        t("Gravity " + exp(aDetails.SurfaceGravity) + " ms⁻²");
        t("Ve " + exp(aDetails.EscapeVelocity) + " m/s");
        if (pass === 0) {
            offset = y - aHeight + lh;
            aTop -= offset;
            aHeight += offset
        }
    }
    aContext.lineWidth = 1;
    aContext.strokeStyle = "white";
    aContext.beginPath();
    aContext.moveTo(aLeft, aTop + aHeight);
    aContext.lineTo(aLeft, aTop);
    aContext.lineTo(aLeft + aWidth, aTop);
    aContext.lineTo(aLeft + aWidth, aTop + aHeight);
    aContext.stroke();
    return {
        left: aLeft,
        top: aTop,
        width: aWidth,
        height: aHeight
    }
};
