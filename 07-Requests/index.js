'use strict';

console.log("AXIOS:", axios);

axios
    .get("https://pokeapi.co/api/v2/pokemon/sneasel")
    .then(response => {
        console.log(response);
        const pokemon = response.data;

        const newP = document.createElement('p');

        newP.innerHTML += `ID: ${pokemon.id}<br>`;
        newP.innerHTML += `Name: ${pokemon.name}<br>`;
        newP.innerHTML += `Height: ${pokemon.height}<br>`;
        newP.innerHTML += `Weight: ${pokemon.weight}<br>`;

        document.getElementById("output").appendChild(newP);
        
    })
    .catch(err => console.error(err));

console.log("Wat up dawg!!!!");