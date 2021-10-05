var user = [];
//var yTable = new Array('yes', 'Yes', 'YES', 'oui', 'Oui', 'OUI');

var check = prompt("lancer la lotarie ?");
if (check == 'yes'|| 'Yes'|| 'YES'|| 'oui'|| 'Oui'|| 'OUI'){ 
    
    // inscription des participant
    while (true){
        var check = prompt("votre nom" + "'' pour stoper l'inscription de participant");
        if (check != ''){     
            if(!user.includes(check)){
                user.push(check);
            }else{
                alert("vous etes deja present");
            }
            console.log(user);
        }else{
            break;
        }
    }
   
    function getRandomArbitrary(min, max){
        return Math.random() * (max - min) + min;
    }

    var min = 0;
    var max = user.length;
    var randomNumber = getRandomArbitrary(min, max);
    var randomNumber = parseInt(randomNumber);

    var winner = user[randomNumber];
    console.log(winner);

    alert("bravo" + " " + winner + " " + "vous avez gagner");

}else{
    alert('dommage, une prochaine fois !');
}