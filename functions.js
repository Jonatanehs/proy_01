// define la funcion sumar(add)
function add(a,b) {
    return a + b;
}

// define la funcion restar(substract)
function substract(a,b) {
    return a - b;
}

// define la funcion multiplicar(multiply)
function multiply(a,b) {
    return a * b;
}

// define la funcion dividir(divide)
function divide(a,b) {
    if (b == 0 && a == 0)  {
        return "No Aplica";
    } else if(b==0){
    return "n/a";
    }  else {
        return a / b;
    }

}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;