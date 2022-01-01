//
//      countdown()
//
//      Parameter:      keine
//      Rückgabewert:   keiner
//
//      Diese Funktion (genaugenommen ist es eine Prozedur, da sie keinen Rückgabewert hat)
//      berechnet aus einem Zielzeitpunkt (countDate) und der aktuellen Zeit (currentDate)
//      die verbleibenenden Tage, Stunden, Minuten und Sekunden und schreibt diese in eine
//      vorbereitete HTML Struktur
//
function countdown()
{
    //  Zielzeit. getTime liefert die Millisekunden des Datums seit "01.01.1970 00:00:00"
    //  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
    //  Und ja, tatsächlich: Wenn Sie ein Datum vor dieser Zeit angeben, ist der Wert negativ...
    const countDate = new Date('Dec 24, 2021 18:00:00').getTime();      
    
    //  Aktuelle Zeit in Millisekunden (Date ohne Parameter enhält immer die aktuelle Zeit Ihres Rechners)
    const currentDate = new Date().getTime();

    //  Die Differenz zwischen beiden Werten (immer noch in Millisekunden)
    var differenz = countDate - currentDate;    

    //  Wichtige Konstanten für die Berechnung von Daten, damit müssen wir die 
    //  Millisekunden in die einzelnen Werte umrechnen
    const second = 1000;            // Eine Millisekunde (wie auf getTime) hat 1000 Sekunden
    const minute = second * 60;     // Eine Minute hat 60 Sekunden
    const hour = minute * 60;       // Eine Stunde...na, Sie wissen schon...
    const day = hour * 24;          // Tag hat 24 Stunden

    //  Rechne Tage, Stunden, Minuten und Sekunden aus. Tage als Ganzzahl, der Rest wird
    //  aus dem jeweiligen Rest (Modulo Operator %) berechnet
    var textDay = Math.floor( differenz / day);
    var textHour = Math.floor(( differenz % day) / hour);
    var textMinute = Math.floor(( differenz % hour) / minute);
    var textSecond = Math.floor(( differenz % minute) / second);

    //  Schreibe die einzelnen Werte in den innenbereich der H3 Tags
    //  Mit dem querySelector können Sie nicht nur in Elemente mit Klassen schreiben, sondern
    //  auch auf die id auswählen. Wie das geht, steht hier: 
    //     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
}

//  Führe diese Prozedur alle 1000 Millisekunden (also einmal pro Sekunde) aus
setInterval(countdown,1000);
