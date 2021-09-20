alert("exercice b");
var tab = ["a","b","c","d","e","f","g","h","i"];

while (true){
    var check = prompt("donner un char");

    if (check != ''){     
        if(!tab.includes(check)){
            tab.push(check);
        }else{
            alert("char déja présent");
        }
        console.log(tab);
    }else{
        break;
    }
}