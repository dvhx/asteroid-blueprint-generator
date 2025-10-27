// Minerals
"use strict";

var SC = window.SC || {};

SC.minerals = {
    Magnetite: {
        Water: .1,
        Iron: .9
    },
    Quartz: {
        Silicon: 1 / 3,
        Oxygen: 2 / 3
    },
    Calcite: {
        Calcium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Argonite: {
        Calcium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    "Lithium salt": {
        Lithium: 3 / 10,
        Oxygen: 3 / 10,
        Sodium: 1 / 10,
        Chlorine: 2 / 10,
        Potassium: 1 / 10
    },
    Colemanite: {
        Calcium: 2 / 24,
        Boron: 6 / 24,
        Oxygen: 11 / 24,
        Water: 5 / 24
    },
    Kernite: {
        Sodium: 2 / 18,
        Boron: 4 / 18,
        Oxygen: 7 / 18,
        Water: 5 / 18
    },
    Ulexite: {
        Sodium: 1 / 30,
        Calcium: 1 / 30,
        Boron: 5 / 30,
        Oxygen: 12 / 30,
        Hydrogen: 6 / 30,
        Water: 5 / 30
    },
    Beryl: {
        Beryllium: 3 / 29,
        Aluminium: 2 / 29,
        Silicon: 6 / 29,
        Oxygen: 18 / 29
    },
    Aquamarine: {
        Beryllium: 3 / 29,
        Aluminium: 2 / 29,
        Silicon: 6 / 29,
        Oxygen: 18 / 29
    },
    Borax: {
        Sodium: 2 / 13,
        Boron: 4 / 13,
        Oxygen: 7 / 13
    },
    Graphite: {
        Carbon: 1
    },
    Diamond: {
        Carbon: 1
    },
    Ammonia: {
        Nitrogen: 1 / 4,
        Hydrogen: 3 / 4
    },
    Methane: {
        Carbon: 1 / 5,
        Hydrogen: 4 / 5
    },
    Fluorite: {
        Calcium: 1 / 3,
        Fluorine: 2 / 3
    },
    Fluorapatite: {
        Calcium: 5 / 21,
        Phosphorus: 3 / 21,
        Oxygen: 4 * 3 / 21,
        Fluorine: 1 / 21
    },
    Cryolite: {
        Sodium: 3 / 10,
        Aluminium: 1 / 10,
        Fluorine: 6 / 10
    },
    "Noble gas": {
        Helium: 3 / 32,
        Neon: 5 / 32,
        Argon: 20 / 32,
        Krypton: 2 / 32,
        Xenon: 1 / 32,
        Radon: 1 / 32
    },
    Magnesite: {
        Magnesium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Dolomite: {
        Calcium: 1 / 10,
        Magnesium: 1 / 10,
        Carbon: 2 / 10,
        Oxygen: 6 / 10
    },
    Gibbsite: {
        Aluminium: 1 / 7,
        Oxygen: 3 / 7,
        Hydrogen: 3 / 7,
        Gallium: .001
    },
    Boehmite: {
        Aluminium: 1 / 4,
        Oxygen: 2 / 4,
        Hydrogen: 1 / 4,
        Gallium: .001
    },
    Diasporit: {
        Aluminium: 1 / 4,
        Oxygen: 2 / 4,
        Hydrogen: 1 / 4,
        Gallium: .001
    },
    Quartzite: {
        Silicon: 1 / 3,
        Oxygen: 2 / 3
    },
    Lazulite: {
        Magnesium: 1 / 19,
        Iron: 2 / 19,
        Aluminium: 2 / 19,
        Phosphorus: 2 / 19,
        Oxygen: 10 / 19,
        Hydrogen: 2 / 19
    },
    Turquoise: {
        Copper: 1 / 47,
        Aluminium: 6 / 47,
        Phosphorus: 4 / 47,
        Oxygen: 24 / 47,
        Hydrogen: 8 / 47,
        Water: 4 / 47
    },
    Apatite: {
        Calcium: 10 / 48,
        Phosphorus: 6 / 48,
        Oxygen: 26 / 48,
        Hydrogen: 2 / 48,
        Fluorine: 2 / 48,
        Chlorine: 2 / 48
    },
    "Sulfur ore": {
        Sulfur: 1
    },
    Potash: {
        Potassium: 15 / 48,
        Carbon: 2 / 48,
        Oxygen: 26 / 48,
        Chlorine: 2 / 48,
        Sulfur: 2 / 48,
        Manganese: 1 / 48
    },
    Carnallite: {
        Potassium: 1 / 11,
        Magnesium: 1 / 11,
        Chlorine: 3 / 11,
        Water: 6 / 11
    },
    Langbeinite: {
        Potassium: 2 / 19,
        Magnesium: 2 / 19,
        Sulfur: 3 / 19,
        Oxygen: 12 / 19
    },
    Polyhalite: {
        Potassium: 2 / 27,
        Calcium: 2 / 27,
        Magnesium: 1 / 27,
        Sulfur: 4 / 27,
        Oxygen: 16 / 27,
        Water: 2 / 27
    },
    Sylvite: {
        Potassium: 1 / 2,
        Chlorine: 1 / 2
    },
    "Scandium oxide": {
        Scandium: 2 / 5,
        Oxygen: 3 / 5
    },
    Thortveitite: {
        Scandium: 2 / 13,
        Yttrium: 2 / 13,
        Silicon: 2 / 13,
        Oxygen: 7 / 13
    },
    Kolbeckite: {
        Scandium: 1 / 8,
        Phosphorus: 1 / 8,
        Oxygen: 4 / 8,
        Water: 2 / 8
    },
    Rutile: {
        Titanium: 1 / 3,
        Oxygen: 2 / 3,
        Zirconium: .001,
        Hafnium: .001
    },
    Ilmenite: {
        Iron: 1 / 5,
        Titanium: 1 / 5,
        Oxygen: 3 / 5,
        Hafnium: .001
    },
    "Vanadium oxide": {
        Vanadium: 1 / 3,
        Oxygen: 2 / 3
    },
    Chromite: {
        Iron: 1 / 7,
        Chromium: 2 / 7,
        Oxygen: 4 / 7
    },
    Magnesiochromite: {
        Magnesium: 1 / 7,
        Chromium: 2 / 7,
        Oxygen: 4 / 7
    },
    Pyrolusite: {
        Manganese: 1 / 3,
        Oxygen: 2 / 3
    },
    Braunite: {
        Manganese: 6 / 19,
        Silicon: 1 / 19,
        Oxygen: 12 / 19
    },
    Psilomelane: {
        Barium: 1 / 17,
        Water: 1 / 17,
        Manganese: 5 / 17,
        Oxygen: 10 / 17
    },
    Hematite: {
        Iron: 2 / 5,
        Oxygen: 3 / 5,
        Gallium: .001
    },
    Goethite: {
        Iron: 1 / 4,
        Oxygen: 2 / 4,
        Hydrogen: 1 / 4,
        Gallium: .001
    },
    Siderite: {
        Iron: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Cobaltite: {
        Cobalt: 1 / 3,
        Arsenic: 1 / 3,
        Sulfur: 1 / 3
    },
    Glaucodot: {
        Cobalt: 1 / 4,
        Iron: 1 / 4,
        Arsenic: 1 / 4,
        Sulfur: 1 / 4
    },
    Skutterudite: {
        Cobalt: 1 / 4,
        Arsenic: 3 / 4
    },
    Garnierite: {
        Nickel: 1 / 2,
        Oxygen: 1 / 2
    },
    Chalcopyrite: {
        Copper: 1 / 4,
        Iron: 1 / 4,
        Sulfur: 2 / 4
    },
    Bornite: {
        Copper: 5 / 10,
        Iron: 1 / 10,
        Sulfur: 4 / 10
    },
    Covellite: {
        Copper: 1 / 2,
        Sulfur: 1 / 2
    },
    Chalcocite: {
        Copper: 2 / 3,
        Sulfur: 1 / 3
    },
    Sphalerite: {
        Zinc: 1 / 4,
        Iron: 1 / 4,
        Sulfur: 2 / 4,
        Gallium: .001
    },
    Galena: {
        Lead: 1 / 2,
        Sulfur: 1 / 2
    },
    Pyrite: {
        Iron: 1 / 3,
        Sulfur: 2 / 3
    },
    Wurtzite: {
        Zinc: 1 / 4,
        Iron: 1 / 4,
        Sulfur: 2 / 4
    },
    Baryte: {
        Barium: 1 / 6,
        Sulfur: 1 / 6,
        Oxygen: 4 / 6
    },
    Marcasite: {
        Iron: 1 / 3,
        Sulfur: 2 / 3
    },
    Gallite: {
        Gallium: 1 / 4,
        Copper: 1 / 4,
        Sulfur: 2 / 4
    },
    Argyrodite: {
        Silver: 8 / 15,
        Germanium: 1 / 15,
        Sulfur: 6 / 15
    },
    Canfieldite: {
        Silver: 8 / 15,
        Tin: 1 / 15,
        Sulfur: 6 / 15
    },
    Algodonite: {
        Copper: 6 / 7,
        Arsenic: 1 / 7
    },
    Atheneite: {
        Palladium: 3 / 8,
        Mercury: 3 / 8,
        Arsenic: 2 / 8
    },
    Domeykite: {
        Copper: 3 / 4,
        Arsenic: 1 / 4
    },
    Krutovite: {
        Nickel: 1 / 3,
        Arsenic: 2 / 3
    },
    Loellingite: {
        Iron: 1 / 3,
        Arsenic: 2 / 3
    },
    Maucherite: {
        Nickel: 11 / 19,
        Arsenic: 8 / 19
    },
    Nickeline: {
        Nickel: 1 / 2,
        Arsenic: 1 / 2
    },
    Oregonite: {
        Nickel: 2 / 5,
        Iron: 1 / 5,
        Arsenic: 2 / 5
    },
    Rammelsbergite: {
        Nickel: 1 / 3,
        Arsenic: 2 / 3
    },
    Safflorite: {
        Cobalt: 1 / 4,
        Iron: 1 / 4,
        Arsenic: 2 / 4
    },
    Sperrylite: {
        Platinum: 1 / 3,
        Arsenic: 2 / 3
    },
    Stillwaterite: {
        Palladium: 8 / 11,
        Arsenic: 3 / 11
    },
    Roselite: {
        Calcium: 2 / 15,
        Cobalt: 1 / 15,
        Magnesium: 1 / 15,
        Arsenic: 2 / 15,
        Oxygen: 8 / 15,
        Water: 1 / 15
    },
    Realgar: {
        Arsenic: 4 / 8,
        Sulfur: 4 / 8
    },
    Orpiment: {
        Arsenic: 2 / 5,
        Sulfur: 3 / 5
    },
    Arsenopyrite: {
        Iron: 1 / 3,
        Arsenic: 1 / 3,
        Sulfur: 1 / 3
    },
    Bukovite: {
        Thallium: 2 / 10,
        Copper: 3 / 10,
        Iron: 1 / 10,
        Selenium: 4 / 10
    },
    Ferroselite: {
        Iron: 1 / 3,
        Selenium: 2 / 3
    },
    Aguilarite: {
        Silver: 4 / 6,
        Selenium: 1 / 6,
        Sulfur: 1 / 6
    },
    Penroseite: {
        Nickel: 1 / 5,
        Cobalt: 1 / 5,
        Copper: 1 / 5,
        Selenium: 2 / 5
    },
    Stilleite: {
        Zinc: 1 / 2,
        Selenium: 1 / 2
    },
    Bromargyrite: {
        Silver: 1 / 2,
        Bromine: 1 / 2
    },
    Kadyrelite: {
        Mercury: 4 / 9,
        Bromine: 2 / 9,
        Chlorine: 2 / 9,
        Oxygen: 1 / 9
    },
    Rubicline: {
        Rubidium: 1 / 14,
        Potassium: 1 / 14,
        Aluminium: 1 / 14,
        Silicon: 3 / 14,
        Oxygen: 8 / 14
    },
    Celestine: {
        Strontium: 1 / 6,
        Sulfur: 1 / 6,
        Oxygen: 4 / 6
    },
    Strontianite: {
        Strontium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    "Bastnäsite": {
        Lanthanum: 1 / 8,
        Cerium: 1 / 8,
        Carbon: 1 / 8,
        Oxygen: 3 / 8,
        Fluorine: 1 / 8,
        Yttrium: 1 / 8
    },
    Monazite: {
        Phosphorus: 100 / 606,
        Oxygen: 400 / 606,
        Cerium: 45 / 606,
        Lanthanum: 24 / 606,
        Neodymium: 17 / 606,
        Praseodymium: 5 / 606,
        Samarium: 1 / 606,
        Thorium: 12 / 606,
        Gadolinium: 1 / 606,
        Yttrium: 1 / 606,
        Lutetium: 3e-5,
        Terbium: 3e-5,
        Dysprosium: 3e-5,
        Holmium: 3e-5,
        Erbium: 3e-5,
        Thulium: 3e-5,
        Ytterbium: 3e-5
    },
    Xenotime: {
        Yttrium: 1 / 6,
        Phosphorus: 1 / 6,
        Oxygen: 4 / 6,
        Dysprosium: .001,
        Erbium: .001,
        Terbium: .001,
        Ytterbium: .001,
        Thorium: .001,
        Uranium: .001,
        Polonium: 1e-6
    },
    Zircon: {
        Zirconium: 1 / 6,
        Silicon: 1 / 6,
        Oxygen: 4 / 6,
        Hafnium: .001
    },
    "Cubic zirconia": {
        Zirconium: 1 / 3,
        Oxygen: 2 / 3
    },
    Vlasovite: {
        Sodium: 2 / 18,
        Zirconium: 1 / 18,
        Silicon: 4 / 18,
        Oxygen: 11 / 18
    },
    Hexacelsian: {
        Barium: 1 / 13,
        Aluminium: 2 / 13,
        Silicon: 2 / 13,
        Oxygen: 8 / 13
    },
    Columbite: {
        Iron: 1 / 10,
        Manganese: 1 / 10,
        Niobium: 2 / 10,
        Oxygen: 6 / 10
    },
    Euxenite: {
        Yttrium: 1 / 17,
        Calcium: 1 / 17,
        Cerium: 1 / 17,
        Uranium: 1 / 17,
        Thorium: 1 / 17,
        Niobium: 2 / 17,
        Tantalum: 2 / 17,
        Titanium: 2 / 17,
        Oxygen: 6 / 17,
        Polonium: 1e-6
    },
    Wulfenite: {
        Molybdenum: 1 / 6,
        Lead: 1 / 6,
        Oxygen: 4 / 6
    },
    Powellite: {
        Molybdenum: 1 / 6,
        Calcium: 1 / 6,
        Oxygen: 4 / 6
    },
    Molybdenite: {
        Molybdenum: 1 / 3,
        Sulfur: 2 / 3,
        Rhenium: .002,
        Neptunium: 1e-4
    },
    Uraninite: {
        Uranium: 1e9 / 3000000051,
        Oxygen: 2e9 / 3000000051,
        Technetium: 50 / 3000000051,
        Promethium: 1 / 3000000051,
        Polonium: 1e-6,
        Francium: 1e-6,
        Protactinium: 1e-6,
        Radium: 1e-6
    },
    Coffinite: {
        Uranium: 1 / 14,
        Silicon: 1 / 14,
        Oxygen: 8 / 14,
        Hydrogen: 4 / 14,
        Technetium: 1e-9,
        Promethium: 1e-10
    },
    Davidite: {
        Oxygen: 38 / 63,
        Titanium: 10 / 63,
        Iron: 10 / 63,
        Yttrium: 1 / 63,
        Uranium: 1 / 63,
        Lanthanum: 1 / 63,
        Cerium: 1 / 63,
        Calcium: 1 / 63
    },
    Laurite: {
        Ruthenium: 1 / 3,
        Sulfur: 2 / 3
    },
    Bowieite: {
        Rhodium: 2 / 9,
        Iridium: 2 / 9,
        Platinum: 2 / 9,
        Sulfur: 3 / 9
    },
    Rhodplumsite: {
        Rhodium: 3 / 7,
        Lead: 2 / 7,
        Sulfur: 2 / 7
    },
    Cooperite: {
        Platinum: 1 / 2,
        Sulfur: 1 / 2,
        Palladium: .001
    },
    Polarite: {
        Palladium: 1 / 3,
        Bismuth: 1 / 3,
        Lead: 1 / 3
    },
    Acanthite: {
        Silver: 2 / 3,
        Sulfur: 1 / 3
    },
    Argentite: {
        Silver: 2 / 3,
        Sulfur: 1 / 3
    },
    Chlorargyrite: {
        Silver: 1 / 2,
        Chlorine: 1 / 2
    },
    Cerussite: {
        Lead: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Litharge: {
        Lead: 1 / 2,
        Oxygen: 1 / 2
    },
    Greenockite: {
        Cadmium: 1 / 2,
        Sulfur: 1 / 2
    },
    Roquesite: {
        Copper: 1 / 4,
        Indium: 1 / 4,
        Sulfur: 2 / 4
    },
    Dzhalindite: {
        Indium: 1 / 7,
        Oxygen: 3 / 7,
        Hydrogen: 3 / 7
    },
    Stannite: {
        Copper: 2 / 9,
        Iron: 1 / 9,
        Tin: 1 / 9,
        Zinc: 1 / 9,
        Sulfur: 4 / 9,
        Germanium: .001
    },
    Kesterite: {
        Copper: 2 / 9,
        Zinc: 1 / 9,
        Iron: 1 / 9,
        Tin: 1 / 9,
        Sulfur: 4 / 9
    },
    Hemusite: {
        Copper: 6 / 16,
        Tin: 1 / 16,
        Molybdenum: 1 / 16,
        Sulfur: 8 / 16
    },
    Tusionite: {
        Manganese: 1 / 10,
        Tin: 1 / 10,
        Boron: 2 / 10,
        Oxygen: 6 / 10
    },
    Teallite: {
        Lead: 1 / 4,
        Tin: 1 / 4,
        Sulfur: 2 / 4
    },
    Pabstite: {
        Barium: 1 / 15,
        Tin: 1 / 15,
        Titanium: 1 / 15,
        Silicon: 3 / 15,
        Oxygen: 9 / 15
    },
    Franckeite: {
        Lead: 5 / 24,
        Tin: 3 / 24,
        Antimony: 2 / 24,
        Sulfur: 14 / 24
    },
    Wolframite: {
        Iron: 1 / 7,
        Manganese: 1 / 7,
        Tungsten: 1 / 7,
        Oxygen: 4 / 7,
        Bismuth: .001
    },
    Cassiterite: {
        Tin: 1 / 3,
        Oxygen: 2 / 3
    },
    Tetrahedrite: {
        Copper: 12 / 41,
        Iron: 12 / 41,
        Antimony: 4 / 41,
        Sulfur: 13 / 41
    },
    Stibnite: {
        Antimony: 2 / 5,
        Sulfur: 3 / 5
    },
    Altaite: {
        Tellurium: 1 / 2,
        Lead: 1 / 2
    },
    Hessite: {
        Silver: 2 / 3,
        Tellurium: 1 / 3
    },
    Dietzeite: {
        Calcium: 15 / 111,
        Iodine: 14 / 111,
        Oxygen: 74 / 111,
        Chromium: 8 / 111
    },
    Iodargyrite: {
        Silver: 1 / 2,
        Iodine: 1 / 2
    },
    Pezzottaite: {
        Caesium: 1 / 30,
        Beryllium: 2 / 30,
        Lithium: 1 / 30,
        Aluminium: 2 / 30,
        Silicon: 6 / 30,
        Oxygen: 18 / 30
    },
    Boracite: {
        Magnesium: 3 / 24,
        Boron: 7 / 24,
        Oxygen: 13 / 24,
        Chlorine: 1 / 24
    },
    Painite: {
        Calcium: 1 / 32,
        Zirconium: 1 / 32,
        Aluminium: 9 / 32,
        Oxygen: 18 / 32,
        Boron: 3 / 32
    },
    Pollucite: {
        Caesium: 2 / 24,
        Sodium: 2 / 24,
        Aluminium: 2 / 24,
        Silicon: 4 / 24,
        Oxygen: 12 / 24,
        Water: 2 / 24
    },
    Lepidolite: {
        Potassium: 1 / 31,
        Lithium: 2 / 31,
        Aluminium: 6 / 31,
        Rubidium: 2 / 31,
        Silicon: 4 / 31,
        Oxygen: 12 / 31,
        Hydrogen: 2 / 31,
        Fluorine: 2 / 31
    },
    Petalite: {
        Lithium: 1 / 16,
        Aluminium: 1 / 16,
        Silicon: 4 / 16,
        Oxygen: 10 / 16
    },
    Avogadrite: {
        Potassium: 1 / 7,
        Caesium: 1 / 7,
        Boron: 1 / 7,
        Fluorine: 4 / 7
    },
    Ferrucite: {
        Sodium: 1 / 6,
        Boron: 1 / 6,
        Fluorine: 4 / 6
    },
    Galkhaite: {
        Caesium: 1 / 40,
        Tellurium: 1 / 40,
        Mercury: 6 / 40,
        Copper: 6 / 40,
        Zinc: 6 / 40,
        Arsenic: 4 / 40,
        Antimony: 4 / 40,
        Sulfur: 12 / 40
    },
    Carnotite: {
        Potassium: 2 / 17,
        Uranium: 2 / 17,
        Oxygen: 8 / 17,
        Vanadium: 2 / 17,
        Water: 3 / 17
    },
    Anglesite: {
        Lead: 1 / 6,
        Sulfur: 1 / 6,
        Oxygen: 4 / 6
    },
    Witherite: {
        Barium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Benitoite: {
        Barium: 1 / 14,
        Titanium: 1 / 14,
        Silicon: 3 / 14,
        Oxygen: 9 / 14
    },
    Hafnon: {
        Hafnium: 1 / 10,
        Zirconium: 1 / 10,
        Silicon: 1 / 10,
        Oxygen: 4 / 10,
        Thorium: 1 / 10,
        Uranium: 1 / 10,
        Yttrium: 1 / 10
    },
    Tantalite: {
        Tantalum: 2 / 10,
        Iron: 1 / 10,
        Manganese: 1 / 10,
        Oxygen: 6 / 10
    },
    Tapiolite: {
        Iron: 1 / 12,
        Manganese: 1 / 12,
        Niobium: 2 / 12,
        Tantalum: 2 / 12,
        Oxygen: 6 / 12
    },
    Ixiolite: {
        Tantalum: 4 / 28,
        Niobium: 4 / 28,
        Tin: 4 / 28,
        Manganese: 4 / 28,
        Iron: 4 / 28,
        Oxygen: 8 / 28
    },
    Scheelite: {
        Tungsten: 1 / 6,
        Calcium: 1 / 6,
        Oxygen: 4 / 6
    },
    Ferberite: {
        Iron: 1 / 6,
        Tungsten: 1 / 6,
        Oxygen: 4 / 6
    },
    "Hübnerite": {
        Manganese: 1 / 6,
        Tungsten: 1 / 6,
        Oxygen: 4 / 6
    },
    Rheniite: {
        Rhenium: 1 / 3,
        Sulfur: 2 / 3
    },
    Osarsite: {
        Osmium: 1 / 4,
        Ruthenium: 1 / 4,
        Arsenic: 1 / 4,
        Sulfur: 1 / 4
    },
    Erlichmanite: {
        Osmium: 1 / 3,
        Sulfur: 2 / 3
    },
    Osmiridium: {
        Osmium: 2 / 3,
        Iridium: 1 / 3
    },
    Iridosmine: {
        Osmium: 1 / 3,
        Iridium: 2 / 3
    },
    Irarsite: {
        Iridium: 1 / 6,
        Ruthenium: 1 / 6,
        Rhenium: 1 / 6,
        Platinum: 1 / 6,
        Arsenic: 1 / 6,
        Sulfur: 1 / 6
    },
    "Osmium ore": {
        Osmium: 1
    },
    "Iridium ore": {
        Iridium: 1
    },
    "Gold ore": {
        Gold: 1
    },
    Calaverite: {
        Gold: 1 / 3,
        Tellurium: 1.91 / 3,
        Silver: .03
    },
    Krennerite: {
        Gold: .8 / 3,
        Tellurium: 2 / 3,
        Silver: .2 / 3
    },
    "Nagyágite": {
        Lead: 5 / 20,
        Gold: 1 / 20,
        Tellurium: 4 / 20,
        Antimony: 4 / 20,
        Sulfur: 6 / 20
    },
    Petzite: {
        Silver: 3 / 6,
        Gold: 1 / 6,
        Tellurium: 2 / 6
    },
    Sylvanite: {
        Silver: 1 / 4,
        Gold: 1 / 4,
        Tellurium: 2 / 4
    },
    Aktashite: {
        Copper: 6 / 25,
        Mercury: 3 / 25,
        Arsenic: 4 / 25,
        Sulfur: 12 / 25
    },
    Arquerite: {
        Silver: 1 / 2,
        Mercury: 1 / 2
    },
    Mosesite: {
        Mercury: 2 / 15,
        Nitrogen: 1 / 15,
        Chlorine: 1 / 15,
        Sulfur: 1 / 15,
        Oxygen: 8 / 15,
        Molybdenum: 1 / 15,
        Water: 1 / 15
    },
    Temagamite: {
        Palladium: 3 / 7,
        Mercury: 1 / 7,
        Tellurium: 3 / 7
    },
    Terlinguaite: {
        Mercury: 2 / 4,
        Chlorine: 1 / 4,
        Oxygen: 1 / 4
    },
    Cinnabar: {
        Mercury: 1 / 2,
        Sulfur: 1 / 2
    },
    Christite: {
        Thallium: 1 / 6,
        Mercury: 1 / 6,
        Arsenic: 1 / 6,
        Sulfur: 3 / 6
    },
    Fettelite: {
        Silver: 16 / 36,
        Mercury: 1 / 36,
        Arsenic: 4 / 36,
        Sulfur: 15 / 36
    },
    Tiemannite: {
        Mercury: 1 / 2,
        Selenium: 1 / 2
    },
    Metacinnabar: {
        Mercury: 1 / 2,
        Sulfur: 1 / 2
    },
    Crookesite: {
        Copper: 7 / 13,
        Tellurium: 1 / 13,
        Silver: 1 / 13,
        Selenium: 4 / 13
    },
    Hutchinsonite: {
        Tellurium: 2 / 18,
        Lead: 2 / 18,
        Arsenic: 5 / 18,
        Sulfur: 9 / 18
    },
    "Lorándite": {
        Tellurium: 1 / 4,
        Arsenic: 1 / 4,
        Sulfur: 2 / 4
    },
    Bismuthinite: {
        Bismuth: 2 / 5,
        Sulfur: 3 / 5
    },
    Aikinite: {
        Lead: 1 / 6,
        Copper: 1 / 6,
        Bismuth: 1 / 6,
        Sulfur: 3 / 6
    },
    Bismite: {
        Bismuth: 2 / 5,
        Oxygen: 3 / 5
    },
    Agardite: {
        Neodymium: 1 / 37,
        Copper: 6 / 37,
        Arsenic: 3 / 37,
        Oxygen: 18 / 37,
        Hydrogen: 6 / 37,
        Water: 3 / 37
    },
    Lanthanite: {
        Lanthanum: 2 / 30,
        Cerium: 2 / 30,
        Neodymium: 2 / 30,
        Praseodymium: 1 / 30,
        Samarium: 1 / 30,
        Europium: 1 / 30,
        Dysprosium: 1 / 30,
        Carbon: 3 / 30,
        Oxygen: 9 / 30,
        Water: 8 / 30
    },
    Ancylite: {
        Strontium: 1 / 14,
        Cerium: 1 / 14,
        Lanthanum: 1 / 14,
        Carbon: 2 / 14,
        Oxygen: 7 / 14,
        Hydrogen: 1 / 14,
        Water: 1 / 14
    },
    Cerite: {
        Cerium: 9 / 69,
        Lanthanum: 9 / 69,
        Calcium: 9 / 69,
        Magnesium: 1 / 69,
        Iron: 3 / 69,
        Silicon: 6 / 69,
        Oxygen: 28 / 69,
        Hydrogen: 4 / 69
    },
    Gadolinite: {
        Cerium: 2 / 23,
        Lanthanum: 2 / 23,
        Neodymium: 2 / 23,
        Yttrium: 2 / 23,
        Iron: 1 / 23,
        Beryllium: 2 / 23,
        Silicon: 2 / 23,
        Oxygen: 10 / 23,
        Gadolinium: .001
    },
    Samarskite: {
        Ytterbium: 2 / 32,
        Yttrium: 2 / 32,
        Iron: 10 / 32,
        Uranium: 2 / 32,
        Thorium: 2 / 32,
        Calcium: 2 / 32,
        Niobium: 2 / 32,
        Tantalum: 2 / 32,
        Oxygen: 8 / 32
    },
    Loparite: {
        Cerium: 1 / 8,
        Sodium: 1 / 8,
        Calcium: 1 / 8,
        Titanium: 1 / 8,
        Niobium: 1 / 8,
        Oxygen: 3 / 8,
        Europium: .001
    },
    Lepersonnite: {
        Calcium: 1 / 225,
        Gadolinium: 2 / 225,
        Dysprosium: 2 / 225,
        Uranium: 24 / 225,
        Oxygen: 112 / 225,
        Silicon: 4 / 225,
        Carbon: 8 / 225,
        Hydrogen: 24 / 225,
        Water: 48 / 225
    },
    Ekanite: {
        Calcium: 2 / 36,
        Thorium: 1 / 36,
        Silicon: 8 / 36,
        Oxygen: 20 / 36,
        Iron: 2 / 36,
        Lead: 2 / 36,
        Uranium: 1 / 36
    },
    Nephrite: {
        Calcium: 2 / 46,
        Magnesium: 5 / 46,
        Iron: 5 / 46,
        Silicon: 8 / 46,
        Oxygen: 24 / 46,
        Hydrogen: 2 / 46
    },
    Agate: {
        Silicon: 1 / 3,
        Oxygen: 2 / 3
    },
    Onyx: {
        Silicon: 1 / 3,
        Oxygen: 2 / 3
    },
    Aragonite: {
        Calcium: 1 / 5,
        Carbon: 1 / 5,
        Oxygen: 3 / 5
    },
    Azurite: {
        Copper: 3 / 15,
        Carbon: 2 / 15,
        Oxygen: 8 / 15,
        Hydrogen: 2 / 15
    },
    Emerald: {
        Beryllium: 3 / 29,
        Aluminium: 2 / 29,
        Silicon: 6 / 29,
        Oxygen: 18 / 29
    },
    Corundum: {
        Aluminium: 2 / 5,
        Oxygen: 3 / 5
    },
    Ruby: {
        Aluminium: 2 / 5,
        Oxygen: 3 / 5,
        Chromium: .001
    },
    Amethyst: {
        Silicon: 1 / 3,
        Oxygen: 2 / 3,
        Iron: .001
    },
    Sapphire: {
        Aluminium: 2 / 5,
        Oxygen: 3 / 5,
        Titanium: .001,
        Iron: .001
    },
    Cuprite: {
        Copper: 2 / 3,
        Oxygen: 1 / 3
    },
    Labradorite: {
        Calcium: 1 / 18,
        Sodium: 1 / 18,
        Aluminium: 4 / 18,
        Silicon: 4 / 18,
        Oxygen: 8 / 18
    },
    Orthoclase: {
        Potassium: 1 / 13,
        Aluminium: 1 / 13,
        Silicon: 3 / 13,
        Oxygen: 8 / 13
    },
    Garnet: {
        Silicon: 3 / 33,
        Oxygen: 12 / 33,
        Calcium: 3 / 33,
        Magnesium: 3 / 33,
        Iron: 5 / 33,
        Manganese: 3 / 33,
        Aluminium: 2 / 33,
        Chromium: 2 / 33
    },
    Jadeite: {
        Sodium: 1 / 10,
        Aluminium: 1 / 10,
        Silicon: 2 / 10,
        Oxygen: 6 / 10
    },
    Lazurite: {
        Sodium: 8 / 63,
        Calcium: 8 / 63,
        Sulfur: 3 / 63,
        Chlorine: 2 / 63,
        Oxygen: 29 / 63,
        Hydrogen: 1 / 63,
        Aluminium: 6 / 63,
        Silicon: 6 / 63
    },
    Malachite: {
        Copper: 2 / 10,
        Carbon: 1 / 10,
        Oxygen: 5 / 10,
        Hydrogen: 2 / 10
    },
    Moissanite: {
        Silicon: 1 / 2,
        Carbon: 1 / 2
    },
    Muscovite: {
        Potassium: 1 / 23,
        Aluminium: 3 / 23,
        Silicon: 3 / 23,
        Oxygen: 12 / 23,
        Fluorine: 2 / 23,
        Hydrogen: 2 / 23
    },
    Opal: {
        Silicon: 10 / 32,
        Oxygen: 20 / 32,
        Water: 2 / 32
    },
    Selenite: {
        Calcium: 1 / 8,
        Sulfur: 1 / 8,
        Oxygen: 4 / 8,
        Water: 2 / 8
    },
    Spinel: {
        Magnesium: 1 / 7,
        Aluminium: 2 / 7,
        Oxygen: 4 / 7
    },
    Titanite: {
        Calcium: 1 / 8,
        Titanium: 1 / 8,
        Silicon: 1 / 8,
        Oxygen: 5 / 8
    },
    Topaz: {
        Aluminium: 2 / 13,
        Silicon: 1 / 13,
        Oxygen: 6 / 13,
        Fluorine: 2 / 13,
        Hydrogen: 2 / 13
    },
    Tourmaline: {
        Calcium: .3 / 50.54,
        Potassium: .3 / 50.54,
        Sodium: .3 / 50.54,
        Aluminium: 3.26 / 50.54,
        Iron: 1.26 / 50.54,
        Lithium: .6 / 50.54,
        Magnesium: .6 / 50.54,
        Manganese: .6 / 50.54,
        Chromium: .66 / 50.54,
        Vanadium: .66 / 50.54,
        Boron: 5 / 50.54,
        Oxygen: 33 / 50.54,
        Silicon: 2 / 50.54,
        Fluorine: 2 / 50.54
    },
    Akimotoite: {
        Magnesium: .2,
        Iron: .2,
        Silicon: .2,
        Oxygen: .4
    },
    Alabandite: {
        Manganese: .5,
        Sulfur: .5
    },
    Allabogdanite: {
        Iron: .4,
        Nickel: .4,
        Phosphorus: .2
    },
    Augite: {
        Calcium: 1 / 16,
        Sodium: 1 / 16,
        Magnesium: 1 / 16,
        Iron: 1 / 16,
        Aluminium: 3 / 16,
        Titanium: 1 / 16,
        Silicon: 2 / 16,
        Oxygen: 6 / 16
    },
    Brezinaite: {
        Chromium: 3 / 7,
        Sulfur: 4 / 7
    },
    Brianite: {
        Sodium: 2 / 14,
        Calcium: 1 / 14,
        Phosphorus: 2 / 14,
        Magnesium: 9 / 14
    },
    Carlsbergite: {
        Chromium: 1 / 2,
        Nitrogen: 1 / 2
    },
    Chladniite: {
        Calcium: 5 / 283,
        Sodium: 12 / 283,
        Magnesium: 43 / 283,
        Iron: 43 / 283,
        Phosphorus: 36 / 283,
        Oxygen: 4 * 36 / 283
    },
    Cohenite: {
        Iron: 3 / 10,
        Nickel: 3 / 10,
        Cobalt: 3 / 10,
        Carbon: 1 / 10
    },
    "Daubréelite": {
        Iron: 2 / 13,
        Chromium: 3 / 13,
        Sulfur: 8 / 13
    },
    Dmitryivanovite: {
        Calcium: 1 / 7,
        Aluminium: 2 / 7,
        Oxygen: 4 / 7
    },
    Grossite: {
        Calcium: 1 / 12,
        Aluminium: 4 / 12,
        Oxygen: 7 / 12
    },
    Hapkeite: {
        Iron: 2 / 3,
        Silicon: 1 / 3
    },
    Haxonite: {
        Iron: 23 / 52,
        Nickel: 23 / 52,
        Carbon: 6 / 52
    },
    Heazlewoodite: {
        Nickel: 3 / 5,
        Sulfur: 2 / 5
    },
    Hibonite: {
        Calcium: 1 / 33,
        Cerium: 1 / 33,
        Aluminium: 12 / 3 / 33,
        Titanium: 12 / 3 / 33,
        Magnesium: 12 / 3 / 33,
        Oxygen: 19 / 33
    },
    Kamacite: {
        Iron: .9,
        Nickel: .1
    },
    Keilite: {
        Iron: 1 / 3,
        Magnesium: 1 / 3,
        Sulfur: 1 / 3
    },
    Krotite: {
        Calcium: 1 / 7,
        Aluminium: 2 / 7,
        Oxygen: 4 / 7
    },
    Lonsdaleite: {
        Carbon: 1
    },
    Melilite: {
        Calcium: 2 / 18,
        Sodium: 2 / 18,
        Aluminium: 2 / 18,
        Magnesium: 1 / 18,
        Iron: 2 / 18,
        Silicon: 2 / 18,
        Oxygen: 7 / 18
    },
    Merrillite: {
        Calcium: 9 / 46,
        Sodium: 1 / 46,
        Magnesium: 1 / 46,
        Phosphorus: 7 / 46,
        Oxygen: 4 * 7 / 46
    },
    Mackinawite: {
        Iron: 1 / 3,
        Nickel: 1 / 3,
        Sulfur: 1 / 3
    },
    Majorite: {
        Magnesium: 4 / 20,
        Silicon: 4 / 20,
        Oxygen: 12 / 20
    },
    Nierite: {
        Silicon: 3 / 7,
        Nitrogen: 4 / 7
    },
    Niningerite: {
        Magnesium: .5,
        Sulfur: .5
    },
    Oldhamite: {
        Calcium: 1 / 2 / 2,
        Magnesium: 1 / 2 / 2,
        Sulfur: 1 / 2
    },
    Olivine: {
        Iron: 2 / 2 / 7,
        Magnesium: 2 / 2 / 7,
        Silicon: 1 / 7,
        Oxygen: 4 / 7
    },
    Panethite: {
        Sodium: 2 / 2 / 14,
        Calcium: 2 / 2 / 14,
        Magnesium: 2 / 2 / 14,
        Iron: 2 / 2 / 14,
        Phosphorus: 2 / 14,
        Oxygen: 8 / 14
    },
    Panguite: {
        Titanium: 4 / 6 / 4.5,
        Scandium: 1 / 6 / 4.5,
        Aluminium: 1 / 6 / 4.5,
        Magnesium: 1 / 6 / 4.5,
        Zirconium: 1 / 6 / 4.5,
        Calcium: 1 / 6 / 4.5,
        Oxygen: 3 / 4.5
    },
    Pentlandite: {
        Iron: 9 / 2 / 17,
        Nickel: 9 / 2 / 17,
        Sulfur: 8 / 17
    },
    Pyroxene: {
        Calcium: 1 / 13,
        Magnesium: 1 / 13,
        Iron: 1 / 13,
        Sodium: 1 / 13,
        Aluminium: 1 / 13,
        Silicon: 2 / 13,
        Oxygen: 6 / 13
    },
    Ringwoodite: {
        Magnesium: 2 / 7,
        Silicon: 1 / 7,
        Oxygen: 4 / 7
    },
    Roaldite: {
        Iron: 4 / 2 / 5,
        Nickel: 4 / 2 / 5,
        Nitrogen: 1 / 5
    },
    Schreibersite: {
        Iron: 3 / 2 / 4,
        Nickel: 3 / 2 / 4,
        Phosphorus: 1 / 4
    },
    Sinoite: {
        Silicon: 2 / 5,
        Nitrogen: 2 / 5,
        Oxygen: 1 / 5
    },
    Taenite: {
        Nickel: 1 / 2,
        Iron: 1 / 2
    },
    Tetrataenite: {
        Nickel: 1 / 2,
        Iron: 1 / 2
    },
    Troilite: {
        Iron: 1 / 2,
        Sulfur: 1 / 2
    },
    Wadsleyite: {
        Magnesium: 2 / 7,
        Silicon: 1 / 7,
        Oxygen: 4 / 7
    },
    Xifengite: {
        Nickel: 1 / 2,
        Iron: 1 / 2
    },
    Salt: {
        Sodium: .5,
        Chlorine: .5,
        Bromine: .001
    },
    Water: {
        Hydrogen: .6,
        Oxygen: .4
    }
};

(function () {
    var p, c, sum;
    for (p in SC.minerals) {
        if (SC.minerals.hasOwnProperty(p)) {
            sum = 0;
            for (c in SC.minerals[p]) {
                if (SC.minerals[p].hasOwnProperty(c)) {
                    sum += SC.minerals[p][c];
                    if (!SC.minerals.hasOwnProperty(c) && !SC.elements.hasOwnProperty(c)) {
                        throw p + " is made of " + c + " which is neither element nor mineral"
                    }
                }
            }
            if (Math.abs(sum - 1) > .01) {
                throw "Sum of " + p + " probabilities is not 1 but " + sum
            }
        }
    }
})();

SC.skipMinerals = {
    Oxygen: 1,
    Silicon: 1,
    Nitrogen: 1,
    O: 1,
    N: 1,
    Si: 1
};

SC.mineralSummary = function (aMineralName, aLimit, aSkip) {
    var i, m = SC.minerals[aMineralName],
        k, parts = [],
        suffix;
    for (k in m) {
        if (m.hasOwnProperty(k)) {
            parts.push({
                element: k,
                ratio: m[k]
            })
        }
    }
    parts.sort(function (a, b) {
        return b.ratio - a.ratio
    });
    if (parts.length > 2) {
        if (aSkip.hasOwnProperty(parts[0].element)) {
            parts.splice(0, 1)
        }
        if (aSkip.hasOwnProperty(parts[0].element)) {
            parts.splice(0, 1)
        }
    }
    for (i = 0; i < parts.length; i++) {
        if (SC.elements.hasOwnProperty(parts[i].element)) {
            suffix = SC.elements[parts[i].element].symbol
        } else {
            suffix = parts[i].element
        }
        parts[i] = (100 * parts[i].ratio).toFixed(0) + "% " + suffix
    }
    return parts.slice(0, aLimit || 2).join(", ")
};
