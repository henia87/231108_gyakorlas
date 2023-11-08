//Eldöntés
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
    var eredmeny = negativVanE(bemenet).toString();
    td2.appendChild(document.createTextNode(eredmeny));
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
