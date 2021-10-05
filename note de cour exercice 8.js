function Rectangle (Longueur, Largeur){
    this.Longueur = Longueur;
    this.Largeur = Largeur; 
    this.Surface = CalcAire();
    this.Perimetre = CalcPeri();
    this.Diagonale = CalcDiago();

    function CalcAire(){
        return Longueur*Largeur ;
    }
    function CalcPeri(){
        return 2*(Longueur + Largeur);
    }
 
    function CalcDiago(){ 
          return Math.round(100*Math.sqrt(Math.pow(Longueur,2) + Math.pow(Largeur,2)))/100;
    }    
}

  var MonRect = new Rectangle(4,5);
  //document.write(MonRect + "<br>");
  document.write("Longueur : " + MonRect.Longueur + "<br>");
  document.write("Largeur : " + MonRect.Largeur + "<br>");
  document.write("Surface = " + MonRect.Surface + "<br>");
  document.write("Perimetre = " + MonRect.Perimetre + "<br>");
  document.write("Diagonale = " + MonRect.Diagonale + "<br>");