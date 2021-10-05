function welcome(yourname){
    if (typeof(yourname) === 'undefined'){
        yourname = "ami";
    }
    return yourname;
}

function welcome2(yourname = "ami"){
    return yourname;
}

function flexwelcome(){
    var welcome = "bienvenue, ";
    for (i = 0; i < arguments.length; i++){
        //document.write("i : " + i + "<br>");
        welcome = welcome + arguments[i]  + " ";
        //document.write(welcome);
    }
    return welcome;
}

document.write(flexwelcome("audric", "xavier") + "<br>");