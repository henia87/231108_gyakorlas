//Eldöntés: van-e negatív szám a tömbben
function negativVanE(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
/* console.log(negativVanE([4, 6, 1213, 123, -5, 976]));
console.log(negativVanE([4, 6, 1213, 123, 976])); */
function negativTabla(bemenet) {
    var negativTabla = document.getElementById("negativTabla");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = bemenet.toString();
    var td2Szoveg = document.createTextNode(negativVanE(bemenet) ? "igen" : "nem");
    td2.appendChild(td2Szoveg);
    tr.appendChild(td1);
    tr.appendChild(td2);
    negativTabla === null || negativTabla === void 0 ? void 0 : negativTabla.appendChild(tr);
}
negativTabla([4, 6, 1213, 123, -5, 976]);
negativTabla([4, 6, 1213, 123, 976]);
//Kör kerülete, területe tuple-lel
function korKeruletTerulet(sugar) {
    var kerulet = 2 * sugar * Math.PI;
    var terulet = Math.pow(sugar, 2) * Math.PI;
    return [kerulet, terulet];
}
//console.log(korKeruletTerulet(4));
function kerTerTabla(bemenet) {
    var kerTerTabla = document.getElementById("kerTerTabla");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerHTML = bemenet.toString();
    td2.innerHTML = korKeruletTerulet(bemenet)[0].toString();
    td3.innerHTML = korKeruletTerulet(bemenet)[1].toString();
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    kerTerTabla === null || kerTerTabla === void 0 ? void 0 : kerTerTabla.appendChild(tr);
}
kerTerTabla(3);
kerTerTabla(4);
kerTerTabla(5);
var autok = [
    {
        gyarto: "Skoda",
        tipus: "Octavia",
        hengerurtartalom: 1800,
        benzinesE: true
    },
    {
        gyarto: "Ford",
        tipus: "Mondeo",
        hengerurtartalom: 1997,
        benzinesE: false
    },
    {
        gyarto: "Suzuki",
        tipus: "Swift",
        hengerurtartalom: 1300,
        benzinesE: true
    },
    {
        gyarto: "BMW",
        tipus: "i8",
        hengerurtartalom: 1500,
        benzinesE: false
    },
    {
        gyarto: "Subaru",
        tipus: "XV",
        hengerurtartalom: 1600,
        benzinesE: true
    }
];
//Auto tömbből legkisebb hengerűrtartalmú Auto
function legkisebbHengerurt(autoTomb) {
    var minAuto = autoTomb[0];
    for (var i = 1; i < autoTomb.length; i++) {
        if (minAuto.hengerurtartalom > autoTomb[i].hengerurtartalom) {
            minAuto = autoTomb[i];
        }
    }
    return minAuto.gyarto + " " + minAuto.tipus + " (" + minAuto.hengerurtartalom + " ccm)";
}
function legkisebbHengerurtKiiras() {
    var pMin = document.getElementById("legkisebbHengerurt");
    pMin.innerHTML = "<b>A legkisebb henger\u0171rtartalm\u00FA aut\u00F3:</b><br />".concat(legkisebbHengerurt(autok));
}
legkisebbHengerurtKiiras();
//Auto tömbből benzinesek darabszáma
function benzinesDb(autoTomb) {
    var db = 0;
    for (var i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].benzinesE == true) {
            db++;
        }
    }
    return db;
}
function benzinesDbKiiras() {
    var pBenzin = document.getElementById("benzinesDb");
    pBenzin.innerHTML = "<b>A benzines aut\u00F3k sz\u00E1ma:</b><br />".concat(benzinesDb(autok));
}
benzinesDbKiiras();
//Átlag - hengerűrtartalom
function atlagCcm(autoTomb) {
    var atlag = 0;
    for (var i = 0; i < autoTomb.length; i++) {
        atlag += autoTomb[i].hengerurtartalom;
    }
    atlag /= autoTomb.length;
    return atlag;
}
function atlagKiiras() {
    var pAtlag = document.getElementById("atlagCcm");
    pAtlag.innerHTML = "<b>Az aut\u00F3k henger\u0171rtartalm\u00E1nak \u00E1tlaga:</b><br />".concat(atlagCcm(autok));
}
atlagKiiras();
//Van benzines? - eldöntés
function benzinesVanE(autoTomb) {
    var ind = 0;
    var bool = false;
    while (ind < autoTomb.length && !(autoTomb[ind].benzinesE == true)) {
        ind++;
    }
    bool = ind < autoTomb.length;
    return bool;
}
function benzinesVanEKiiras() {
    var pBenzinesVanE = document.getElementById("benzinesVanE");
    pBenzinesVanE.innerHTML = "<b>Van benzines aut\u00F3? </b><br />".concat(benzinesVanE(autok) ? 'Van' : 'Nincs');
}
benzinesVanEKiiras();
//Benzines - nem benzines szétválogatás
function benzinNemBenzinSzetval(autoTomb) {
    var benzinesTomb = [];
    var nemBenzinesTomb = [];
    for (var i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].benzinesE == true) {
            benzinesTomb.push(autoTomb[i]);
        }
        else {
            nemBenzinesTomb.push(autoTomb[i]);
        }
    }
    return [benzinesTomb, nemBenzinesTomb];
}
function benzinNemBenzinSzetvalKiiras() {
    var eredmeny = benzinNemBenzinSzetval(autok);
    var benzinesek = document.getElementById("benzinesek");
    var nemBenzinesek = document.getElementById("nemBenzinesek");
    for (var i = 0; i < eredmeny[0].length; i++) {
        var liBenzin = document.createElement("li");
        liBenzin.innerHTML = "\n            <b>Gy\u00E1rt\u00F3:</b> ".concat(eredmeny[0][i].gyarto, "<br />\n            <b>T\u00EDpus:</b> ").concat(eredmeny[0][i].tipus, "<br />\n            <b>Henger\u0171rtartalom:</b> ").concat(eredmeny[0][i].hengerurtartalom, " ccm<br />\n            <b>Benzines:</b> ").concat(eredmeny[0][i].benzinesE ? "igen" : "nem", "<br />\n            ");
        benzinesek.appendChild(liBenzin);
    }
    for (var j = 0; j < eredmeny[1].length; j++) {
        var liNemBenzin = document.createElement("li");
        liNemBenzin.innerHTML = "\n            <b>Gy\u00E1rt\u00F3:</b> ".concat(eredmeny[1][j].gyarto, "<br />\n            <b>T\u00EDpus:</b> ").concat(eredmeny[1][j].tipus, "<br />\n            <b>Henger\u0171rtartalom:</b> ").concat(eredmeny[1][j].hengerurtartalom, " ccm<br />\n            <b>Benzines:</b> ").concat(eredmeny[1][j].benzinesE ? "igen" : "nem", "<br />\n            ");
        nemBenzinesek.appendChild(liNemBenzin);
    }
}
benzinNemBenzinSzetvalKiiras();
