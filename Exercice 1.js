alert("exercice a");
var langagesProg = [];
while (true){
    var nomLangage = prompt("entrez le nom d\'un langage, svp : ");
    if (nomLangage != ''){
        langagesProg.push(nomLangage);
    }else{
        break;
    }

}

var compteur = 0;
while (compteur <= langagesProg.length){
    document.write(langagesProg[compteur]);
    document.write("<br />");
    compteur = compteur + 1;
}
console.log(langagesProg);