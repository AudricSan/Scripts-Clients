var human = {
    eye : 2,
    foot : 2,
    hand : 2,
    tall : 1.80
};

// edition des valeur
human.eye = 2;
human.hair = "white";

console.log(human);


///////////////

var mychair = {"tissusassis":"", "nombrepied":"", "hauteurpieds":""};

function configurechair(){
    var uservalue;
    for(var property in mychair){
        if(mychair.hasOwnProperty(property)){
            uservalue = prompt("entrer une valeur pour " + property);
            mychair[property] = uservalue;
        }
    }
}
function writechaireceipt(){
    document.write("<h2>votre chaise aura la configuration suivante :</h2>");
    for(var property in mychair){
        if(mychair.hasOwnProperty(property)){
            document.write(property + ": " + mychair[property] + "</br>");
        }
    }
}
configurechair();
writechaireceipt();

///////////////////////

var sandwish = { 
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",
    makeSandwish: function (meat, cheese, bread, condiment){
        sandwish.meat = meat;
        sandwish.cheese = cheese;
        sandwish.bread = bread;
        sandwish.condiment = condiment;

        var mysandwish = sandwish.meat + ", " + sandwish.cheese + ", " + sandwish.bread + ", " + sandwish.condiment;
        return mysandwish;
    }
}

var sandwishOrder = sandwish.makeSandwish("jambon", "cheddar", "pain cumin", "moutarde forte" );
document.write("Votre commande : " + sandwishOrder);

console.log(sandwishOrder);
console.log(sandwish);

///////////// THIS METHODE //////////////////////
var sandwish = { 
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",
    makeSandwish: function (meat, cheese, bread, condiment){
        this.meat = meat;
        this.cheese = cheese;
        this.bread = bread;
        this.condiment = condiment;

        var mysandwish = this.meat + ", " + this.cheese + ", " + this.bread + ", " + this.condiment;
        return mysandwish;
    }
}

var sandwishOrder = sandwish.makeSandwish("jambon", "cheddar", "pain cumin", "moutarde forte" );
document.write("Votre commande : " + sandwishOrder);

console.log(sandwishOrder);
console.log(sandwish);
////////////////////////////////////////////////

var human = new Object();
human.eye = 2;
human.oreil = 2;
human.bras = 2;
human.pied = 2;
human.jambe = 2;
human.genre = "Homo-Sappiens";

//////////////////////////////
function human(){
    this.eye = 2;
    this.oreil = 2;
    this.bras = 2;
    this.pied = 2;
    this.jambe = 2;
    this.genre = "Homo-Sappiens";
}

var AudricRosier = new human();
var AudricRosier = Object.create(human);