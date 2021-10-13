alert("exercice c");
var table = ["a","a","b","b","c","c","a","d","c","g","c","d"];
var newTable =[];
var search = prompt("caracter to search");

for(var i = 0; i<table.length; i++){
    if(table[i] == search){
        newTable.push(search);
    }
}

console.log(newTable);


alert("exercice c");
var index = [];
var table = ["a","a","b","b","c","c","a","d","c","g","c","d"];
var search = prompt("caracter to search");
var idx = table.indexOf(search);

console.log(idx);

while(idx != -1){
    index.push(idx);
    idx = table.indexOf(search, idx + 1);
    console.log(idx);
}

var occurence = [];
var compteur = 0;
while (compteur < index.length){
    occurence.push(search);
    compteur = compteur + 1;
}

console.log(occurence);