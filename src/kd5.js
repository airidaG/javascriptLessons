"use strict"

const calcPercentage = (event) =>{
    event.preventDefault();
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;

    let calculatedNumber = (+firstNumber / 100) * +secondNumber;

    showData(calculatedNumber);
};

const showData = (data) => {
    document.querySelector("#result").innerHTML = data;
}

document.querySelector("#percentage-form").addEventListener("submit", calcPercentage);