function divideBy(firstNumber, secondNumber) {
    return secondNumber/firstNumber;
}

function addBy(firstNumber, secondNumber) {
    return secondNumber+firstNumber;
}

let addBy100 = function(x){return addBy(x, 100)};
let addBy1000 = function(x){return addBy(x, 1000)};
let divideBy10 = function(x){return divideBy(10, x)};
let divideBy100 = function(x){return divideBy(100, x)};
