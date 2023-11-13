//Eldöntés: van-e negatív szám a tömbben

function negativVanE(szamok:number[]):boolean{
    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0 )){
        i++;
    }
    return i < szamok.length;
}

/* console.log(negativVanE([4, 6, 1213, 123, -5, 976]));
console.log(negativVanE([4, 6, 1213, 123, 976])); */

function negativTabla(bemenet:number[]):void{
    var negativTabla = document.getElementById("negativTabla");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = bemenet.toString();
    var td2Szoveg = document.createTextNode(negativVanE(bemenet) ? "igen" : "nem");
    td2.appendChild(td2Szoveg);
    tr.appendChild(td1);
    tr.appendChild(td2);
    negativTabla?.appendChild(tr);
}

negativTabla([4, 6, 1213, 123, -5, 976]);
negativTabla([4, 6, 1213, 123, 976]);

//Kör kerülete, területe tuple-lel

function korKeruletTerulet(sugar:number):[number, number]{
    var kerulet = 2 * sugar * Math.PI;
    var terulet = Math.pow(sugar, 2) * Math.PI;

    return [kerulet, terulet];
}

//console.log(korKeruletTerulet(4));

function kerTerTabla(bemenet:number):void{
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
    kerTerTabla?.appendChild(tr);
}

kerTerTabla(3);
kerTerTabla(4);
kerTerTabla(5);

//Auto interfész
interface Auto {
    gyarto:string,
    tipus:string,
    hengerurtartalom:number,
    benzinesE:boolean
}

var autok:Auto[] = [
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
]

//Auto tömbből legkisebb hengerűrtartalmú Auto
function legkisebbHengerurt(autoTomb:Auto[]):string{
    var minAuto:Auto = autoTomb[0];

    for(var i:number = 1; i < autoTomb.length; i++){
        if(minAuto.hengerurtartalom > autoTomb[i].hengerurtartalom){
            minAuto = autoTomb[i];
        }
    }
    return minAuto.gyarto + " " + minAuto.tipus + " (" + minAuto.hengerurtartalom + " ccm)";
}

function legkisebbHengerurtKiiras():void{
    var pMin:HTMLParagraphElement = document.getElementById("legkisebbHengerurt") as HTMLParagraphElement;
    pMin.innerHTML = `<b>A legkisebb hengerűrtartalmú autó:</b><br />${legkisebbHengerurt(autok)}`;
}

legkisebbHengerurtKiiras();

//Auto tömbből benzinesek darabszáma
function benzinesDb(autoTomb:Auto[]):number{
    var db:number = 0;

    for(var i:number = 0; i < autoTomb.length; i++){
        if(autoTomb[i].benzinesE == true){
            db++;
        }
    }
    return db;
}

function benzinesDbKiiras():void{
    var pBenzin:HTMLParagraphElement = document.getElementById("benzinesDb") as HTMLParagraphElement;
    pBenzin.innerHTML = `<b>A benzines autók száma:</b><br />${benzinesDb(autok)}`;
}

benzinesDbKiiras();

//Átlag - hengerűrtartalom

function atlagCcm(autoTomb:Auto[]):number{
    var atlag:number = 0;

    for(var i:number = 0; i < autoTomb.length; i++){
        atlag += autoTomb[i].hengerurtartalom;
    }
    atlag /= autoTomb.length;

    return atlag;
}

function atlagKiiras():void{
    var pAtlag:HTMLParagraphElement = document.getElementById("atlagCcm") as HTMLParagraphElement;
    pAtlag.innerHTML = `<b>Az autók hengerűrtartalmának átlaga:</b><br />${atlagCcm(autok)}`;
}

atlagKiiras();

//Van benzines? - eldöntés

function nemBenzinesVanE(autoTomb:Auto[]):boolean{
    var ind:number = 0;

    while(ind < autoTomb.length && !(autoTomb[ind].benzinesE == false)){
        ind++;
    }

    return ind < autoTomb.length;
}

function nemBenzinesVanEKiiras():void{
    var pBenzinesVanE:HTMLParagraphElement = document.getElementById("nemBenzinesVanE") as HTMLParagraphElement;
    pBenzinesVanE.innerHTML = `<b>Van nem benzines autó? </b><br />${nemBenzinesVanE(autok) ? 'Van' : 'Nincs'}`;
}

nemBenzinesVanEKiiras();

//Benzines - nem benzines szétválogatás

function benzinNemBenzinSzetval(autoTomb:Auto[]):[Auto[], Auto[]]{
    var benzinesTomb:Auto[] = [];
    var nemBenzinesTomb:Auto[] = [];
    
    for(var i:number = 0; i < autoTomb.length; i++){
        if(autoTomb[i].benzinesE == true){
            benzinesTomb.push(autoTomb[i]);
        }
        else{
            nemBenzinesTomb.push(autoTomb[i]);
        }
    }
    return [benzinesTomb, nemBenzinesTomb];
}

function benzinNemBenzinSzetvalKiiras():void{
    var eredmeny:[Auto[], Auto[]] = benzinNemBenzinSzetval(autok);
    
    var benzinesek:HTMLUListElement = document.getElementById("benzinesek") as HTMLUListElement;
    var nemBenzinesek:HTMLUListElement = document.getElementById("nemBenzinesek") as HTMLUListElement;

    for(var i:number = 0; i < eredmeny[0].length; i++){
        var liBenzin:HTMLLIElement = document.createElement("li");
        liBenzin.innerHTML = `
            <b>Gyártó:</b> ${eredmeny[0][i].gyarto}<br />
            <b>Típus:</b> ${eredmeny[0][i].tipus}<br />
            <b>Hengerűrtartalom:</b> ${eredmeny[0][i].hengerurtartalom} ccm<br />
            <b>Benzines:</b> ${eredmeny[0][i].benzinesE ? "igen" : "nem"}<br />
            `;
        benzinesek.appendChild(liBenzin);
    }

    for(var j:number = 0; j < eredmeny[1].length; j++){
        var liNemBenzin:HTMLLIElement = document.createElement("li");
        liNemBenzin.innerHTML = `
            <b>Gyártó:</b> ${eredmeny[1][j].gyarto}<br />
            <b>Típus:</b> ${eredmeny[1][j].tipus}<br />
            <b>Hengerűrtartalom:</b> ${eredmeny[1][j].hengerurtartalom} ccm<br />
            <b>Benzines:</b> ${eredmeny[1][j].benzinesE ? "igen" : "nem"}<br />
            `;
        nemBenzinesek.appendChild(liNemBenzin);
    }
}

benzinNemBenzinSzetvalKiiras();