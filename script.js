console.log("TEST");

function convertUsd(){
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = 54.87;
    let sum = firstNumber / secondNumber;
    document.getElementById("results").innerHTML = sum;
    document.getElementById("coin").innerHTML = "USD";
    
}

function convertJpy(){
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = 2.42;
    let sum = firstNumber / secondNumber;
    document.getElementById("results").innerHTML = sum;
    document.getElementById("coin").innerHTML = "JPY";
    
}

function convertMxn(){
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = 0.35;
    let sum = firstNumber * secondNumber;
    document.getElementById("results").innerHTML = sum;
    document.getElementById("coin").innerHTML = "MXN";
    
}