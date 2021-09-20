alert("exercice b");
var langagesProg = ["PHP", "JavaScript", "Java", "C#"];

while (true){
    var nomLangage2 = prompt("entre le nom d'un langage");

    if (nomLangage2 != ''){
        if (langagesProg.indexOf(nomLangage2) != -1){
            alert("le langage existe bien")
        }else{
            alert("le langage n'existe pas");
        }
    }else{
        break;
    }
}