"use strict";

function hoisting() {
    x = 27;
    console.log("X1:", x);
    {
        var x;
    }
    console.log("X2:", x);
    x = 12;
    console.log("X3:", x);
}

function hoisted() {
    var x;
    x = 27;
    console.log("X1:", x);
    console.log("X2:", x);
    x = 12;
    console.log("X3:", x);
}

// var fred;

function implication() {
    fred = 44;
    console.log(fred);
}