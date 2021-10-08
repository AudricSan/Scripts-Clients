let total = 0


function addition(x){
    total += x;
    return total;
}

function subtraction(x){
    total -= x;
    return total;
}

function multiply(x){
    if(total === 0){
        total = x;
        return total;
    }else{
        total *= x;
        return total;
    }
}

function division(x){
    if(total === 0){
        total = x;
        return total;
    }else{
        total /= x;
        return total;
    }
}

function clear(x){
    total = 0;
    return total;
}