document.write("cas 3 - fishier de Script");
document.write("<br>");

var obDate = new Date();
var heure = obDate.getHours();
var jour = obDate.getDay();
var nomJour;
var mess;

switch (jour){
    case 0: nomJour = "Dimanche"; break;
    case 1: nomJour = "Lundi"; break;
    case 2: nomJour = "Mardi"; break;
    case 3: nomJour = "Mercredi"; break;
    case 4: nomJour = "Jeudi"; break;
    case 5: nomJour = "Vendredi"; break;
    case 6: nomJour = "Samedi"; break;
    default: nomJour = "Un drole de jour";
}

if (heure >= 22 || heure < 4)
    mess = 'Bonne nuit';
else if (heure < 16)
    mess = "Bonjour";
else
    mess = "Bonsoir";

document.write(mess + ".");
document.write("<br>");
document.write("nous sommes " + nomJour + ".");