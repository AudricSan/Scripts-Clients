var sum = 0;
var numberList = [];

do {
    var demandeEntier = prompt("Que voulez-vous additionner ? ('' pour terminer l'addition)");
    if (demandeEntier != "") {
        demandeEntier = parseInt(demandeEntier);
        numberList.push(demandeEntier);
        sum += demandeEntier;
    } else {
        addition = numberList.toString();
        //addition = addition.replace(/,/gi, "+");
        addition = addition.replaceAll(",", " + ");
        document.write(addition);
        document.write(" = " + sum);
        document.write("<br><br>");
    }
}
while (demandeEntier != "");