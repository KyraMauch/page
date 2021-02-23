"use strict"

function fAutoCheck() {
    //Titel
    var vTitel = "Auto Titel";
    //Beschreibung
    var vBeschreibung = "Beschreibung";
    //Kriterien
    var vKriterium1 = document.getElementById("Kriterium1").checked;
    var vKriterium2 = document.getElementById("Kriterium2").checked;
    var vKriterium3 = document.getElementById("Kriterium3").checked;
    //Ändern von Style
    var vAusgabeBox = document.getElementById("idAusgabeAnzeige");
    vAusgabeBox.style.display = "block";
    //Bild Ändern
    var vImgBox = document.getElementById("idBildAusgabeSrc");
    vImgBox.src = "https://via.placeholder.com/400x250";
    //Logik
    if (vKriterium1 == true && vKriterium2 == true && vKriterium3 == true) {
        vTitel = "Audi Q5"
        vBeschreibung = "Audi Q5 <br> Leistung: 180PS <br> 0-100 km/h: 8.2s <br> Höchstgeschwindigkeit: 205km/h <br> Verbrauch: 5.9l/100km "
        vImgBox.src = "img/Q5.jpg"
    } else if (vKriterium1 == false && vKriterium2 == true && vKriterium3 == true) {
        vTitel = "Audi Q2"
        vBeschreibung = "Audi Q2 <br> Leistung: 150PS <br> 0-100 km/h: 8.6s <br> Höchstgeschwindigkeit: 218km/h <br> Verbrauch: 5.1l/100km"
        vImgBox.src = "img/Q2.jpg"
    } else if (vKriterium1 == false && vKriterium2 == false && vKriterium3 == true) {
        vTitel = "Audi A3"
        vBeschreibung = "Audi A3 <br> Leistung: 400PS <br> 0-100 km/h: 4.1s <br> Höchstgeschwindigkeit: 250km/h <br> Verbrauch: 8.5/100km"
        vImgBox.src = "img/A3.jpg"
    } else if (vKriterium1 == false && vKriterium2 == false && vKriterium3 == false) {
        vTitel = "Audi A8"
        vBeschreibung = "Audi A8 <br> Leistung: 290PS <br> 0-100 km/h: 6.1s <br> Höchstgeschwindigkeit: 250km/h <br> Verbrauch: 8.8/100km"
        vImgBox.src = "img/A8.jpg"
    } else if (vKriterium1 == true && vKriterium2 == false && vKriterium3 == true) {
        vTitel = "Audi A4"
        vBeschreibung = "Audi A4 <br> Leistung: 252PS <br> 0-100 km/h: 7.5s <br> Höchstgeschwindigkeit: 238km/h <br> Verbrauch: 5.9/100km"
        vImgBox.src = "img/A4.jpg"
    } else if (vKriterium1 == true && vKriterium2 == false && vKriterium3 == false) {
        vTitel = "Audi R8"
        vBeschreibung = "Audi R8 <br> Leistung: 570PS <br> 0-100 km/h: 3.4s <br> Höchstgeschwindigkeit: 316km/h <br> Verbrauch: 13.1/100km"
        vImgBox.src = "img/r8.jpg"
    } else if (vKriterium1 == true && vKriterium2 == true && vKriterium3 == false) {
        vTitel = "Audi RSQ8"
        vBeschreibung = "Audi RSQ8 <br> Leistung: 600PS <br> 0-100 km/h: 3.8s <br> Höchstgeschwindigkeit: 250km/h <br> Verbrauch: 13.7/100km"
        vImgBox.src = "img/RSQ8.jpg"
    } else if (vKriterium1 == false && vKriterium2 == true && vKriterium3 == false) {
        vTitel = "Audi Q7"
        vBeschreibung = "Audi Q7 <br> Leistung: 340PS <br> 0-100 km/h: 5.9s <br> Höchstgeschwindigkeit: 250km/h <br> Verbrauch: 8.8/100km"
        vImgBox.src = "img/q7.jpg"
    }
    //Ausgabe
    var vAusgabeHTML = "<h2>" + vTitel + "</h2>" + "<div>" + vBeschreibung + "</div>";
    document.getElementById("idTextAusgabe").innerHTML = vAusgabeHTML;
}
