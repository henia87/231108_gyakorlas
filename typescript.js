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
function negativTabla(bemenet, kimenet) {
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
negativTabla([4, 6, 1213, 123, -5, 976], negativVanE([4, 6, 1213, 123, -5, 976]));
negativTabla([4, 6, 1213, 123, 976], negativVanE([4, 6, 1213, 123, 976]));
//Kör kerülete, területe tuple-lel
function korKeruletTerulet(sugar) {
    var kerulet = 2 * sugar * Math.PI;
    var terulet = Math.pow(sugar, 2) * Math.PI;
    return [kerulet, terulet];
}
//console.log(korKeruletTerulet(4));
function kerTerTabla(bemenet, kimenet) {
    var kerTerTabla = document.getElementById("kerTerTabla");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerHTML = bemenet.toString();
    td2.innerHTML = kimenet[0].toString();
    td3.innerHTML = kimenet[1].toString();
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    kerTerTabla === null || kerTerTabla === void 0 ? void 0 : kerTerTabla.appendChild(tr);
}
kerTerTabla(3, korKeruletTerulet(3));
kerTerTabla(4, korKeruletTerulet(4));
kerTerTabla(5, korKeruletTerulet(5));
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
        gyarto: "BWM",
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
    return minAuto.gyarto + " " + minAuto.tipus + " (" + minAuto.hengerurtartalom + ")" + " ccm";
}
function legkisebbHengerurtKiiras() {
    var pMin = document.getElementById("legkisebbHengerurt");
    pMin.innerHTML = "<b>A legkisebb henger\u0171rtartalm\u00FA aut\u00F3:</b> ".concat(legkisebbHengerurt(autok));
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
    pBenzin.innerHTML = "<b>A benzines aut\u00F3k sz\u00E1ma:</b> ".concat(benzinesDb(autok));
}
benzinesDbKiiras();
