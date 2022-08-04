'use strict';


for (let button of document.querySelectorAll("button.counterButton")) {
    button.addEventListener("click", function(event) {
        const {innerText: value} = event.target;
        
        const counter = document.getElementById("counter");
        if (value === "R") return counter.value = "0";
        // debugger;
        const oldValue = parseInt(counter.value);
        const newValue =  oldValue + parseInt(value);
        counter.value = newValue;

        const newHistory = document.createElement("p");
        newHistory.innerText = `${oldValue} + ${parseInt(value)} = ${newValue}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => newHistory.remove());
        newHistory.appendChild(deleteButton);
        document.getElementById("output").prepend(newHistory);
    });
}

