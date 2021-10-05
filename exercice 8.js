function Rectangle(length, width){
    this.length = length;
    this.width = width;
    this.surface = surface();
    this.perimeter = perimeter();
    this.diagonal = diagonal();
    
    function surface(){
        return length * width;
    }

    function perimeter(){
        return(length + width) * 2;
    }

    function diagonal(){
        return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    }
}

function square(side){
    var obj = new Rectangle(side, side);
    obj.side = side;
    return obj;
}

var myrectangle = new Rectangle(5, 6)
var mysquare = new square(3);

console.log(myrectangle);
console.log(mysquare);