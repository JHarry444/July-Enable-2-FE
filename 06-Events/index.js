'use strict';


const greet = () => alert("yo");

document.querySelector("button#myButton").addEventListener("click", function() {
    alert("yo!!!!!");
});

const milesInput = document.querySelector("input#milesInput");
const kmsInput = document.querySelector("input#kmsInput");


milesInput.addEventListener("input", function() {
    const miles = Number.parseFloat(milesInput.value);
    kmsInput.value = (1.6 * miles).toFixed(1);
});

kmsInput.addEventListener("input", function(event) {
    const kms = Number.parseFloat(event.target.value);
    milesInput.value = (kms / 1.6).toFixed(1);
})