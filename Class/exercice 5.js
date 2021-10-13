var nb1 = prompt('nombre 1');
var nb2 = prompt('nombre 2');
var result = (nb1 ** nb2);
console.log(result);

//////////////////////////////////////////////////

var nb1 = prompt('nombre 1');
var nb2 = prompt('nombre 2');
var result = Math.pow(nb1, nb2);
console.log(result);

/////////////////////////////////////////////////

var nb1 = prompt("Entrez un nombre");
var nb2 = prompt("Entrez la puissane à laquelle vous voulez elever ce nombre"); 
var x = 1;
var result = nb1;
do{
	result = (result*nb1);
  x++;
}while(x!=nb2)
console.log(result);

////////////////////////////////////////////////

function numberToPower(number, power){
  var total = 1
  for(i = 1; i <= power; i++){
    total *= number;
  }
  return total;
}
var num1 = prompt("Quel est le 1er argument? (nombre entier à entrer)");
var num2 = prompt("Quel est le 2eme argument? (nombre entier en exposant)");
document.write(num1 + "<sup>" + num2 + "</sup> = " + numberToPower(num1, num2));

/////////////////////////////////////////////////

var entier1=prompt("Entrez un entier:");
var entier2=prompt("Entrez un deuxième entier:");
var puissance = [];
puissance[0] = Number(entier1);
for (i= 1; i < Number(entier2); i++) {
    document.write("iteration " + i + "<br>");
    puissance[i] = puissance [i-1]* Number(entier1);
}
document.write(puissance[Number(entier2 - 1)]);