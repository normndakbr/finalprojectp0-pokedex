let pokemon = {
    Fire: ['Charmander', 'Cyndaquil', 'Torchic'],
    Water: ['Squirtle', 'Totodile', 'Mudkip', 'Wartortle'],
    Grass: ['Bulbasaur', 'Chikorita', 'Treecko'],
    Other: ['Gastly', 'Sandshrew', 'Diglett', 'Snorlax', 'Electrode']
}

let index = 0;
let pkball1 = document.getElementById("pkball1");
let pkball2 = document.getElementById("pkball2");
let pkball3 = document.getElementById("pkball3");
let pkball4 = document.getElementById("pkball4");


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pkballMouseOver(pkballId){
    let id = pkballId.id;
    
    switch(id){
        case 'pkball1':
            document.getElementById("info").innerHTML = "Fire Type Pokémon";
        break;
        case 'pkball2':
            document.getElementById("info").innerText = "Water Type Pokémon";
        break;
        case 'pkball3':
            document.getElementById("info").innerText = "Grass Type Pokémon";
        break;
        case 'pkball4':
            document.getElementById("info").innerText = "Other Type Pokémon";
        break;
    }
}

function pkballMouseOut(pkballId2){
    pkballId2.classList.remove("bounce7");
    pkballId2.src = "image-assets/pkball.png"
    document.getElementById("info").innerText = "Which one?";
}

pkball1.addEventListener("mouseover", () => {pkballMouseOver(pkball1)});
pkball2.addEventListener("mouseover", () => {pkballMouseOver(pkball2)});
pkball3.addEventListener("mouseover", () => {pkballMouseOver(pkball3)});
pkball4.addEventListener("mouseover", () => {pkballMouseOver(pkball4)});

pkball1.addEventListener("mouseout", () => {pkballMouseOut(pkball1)});
pkball2.addEventListener("mouseout", () => {pkballMouseOut(pkball2)});
pkball3.addEventListener("mouseout", () => {pkballMouseOut(pkball3)});
pkball4.addEventListener("mouseout", () => {pkballMouseOut(pkball4)});

pkball1.addEventListener("click", function(){
    index = getRandomInt(pokemon.Fire.length-1);
    document.getElementById("info").innerHTML = `Hey it's ${pokemon.Fire[index]}!`;
    pkball1.classList.add("bounce7");
    if(pokemon.Fire[index]==='Charmander'){
        pkball1.src = "image-assets/charmander.gif"
    }else if(pokemon.Fire[index]==='Cyndaquil'){
        pkball1.src = "image-assets/cyndaquil.gif"
    }else if(pokemon.Fire[index]==='Torchic'){
        pkball1.src = "image-assets/torchic.gif"
    }
})

pkball2.addEventListener("click", function(){
    index = getRandomInt(pokemon.Water.length-1);
    document.getElementById("info").innerHTML = `Say hello to ${pokemon.Water[index]}!`;
    pkball2.classList.add("bounce7");
    if(pokemon.Water[index]==='Squirtle'){
        pkball2.src = "image-assets/squirtle.gif"
    }else if(pokemon.Water[index]==='Totodile'){
        pkball2.src = "image-assets/totodile.gif"
    }else if(pokemon.Water[index]==='Mudkip'){
        pkball2.src = "image-assets/mudkip.gif"
    }else if(pokemon.Water[index]==='Wartortle'){
        pkball2.src = "image-assets/wartortle.gif"
    }
})

pkball3.addEventListener("click", function(){
    index = getRandomInt(pokemon.Grass.length-1);
    document.getElementById("info").innerHTML = `${pokemon.Grass[index]} is ready to explore!`;
    pkball3.classList.add("bounce7");
    if(pokemon.Grass[index]==='Bulbasaur'){
        pkball3.src = "image-assets/bulbasaur.gif"
    }else if(pokemon.Grass[index]==='Chikorita'){
        pkball3.src = "image-assets/chikorita.gif"
    }else if(pokemon.Grass[index]==='Treecko'){
        pkball3.src = "image-assets/treecko.gif"
    }
})

pkball4.addEventListener("click", function(){
    index = getRandomInt(pokemon.Other.length-1);
    document.getElementById("info").innerHTML = `You got ${pokemon.Other[index]}!`;
    pkball4.classList.add("bounce7");
    if(pokemon.Other[index]==='Gastly'){
        pkball4.src = "image-assets/gastly.gif"
    }else if(pokemon.Other[index]==='Sandshrew'){
        pkball4.src = "image-assets/sandshrew.gif"
    }else if(pokemon.Other[index]==='Diglett'){
        pkball4.src = "image-assets/diglett.gif"
    }else if(pokemon.Other[index]==='Snorlax'){
        pkball4.src = "image-assets/snorlax.gif"
    }else if(pokemon.Other[index]==='Electrode'){
        pkball4.src = "image-assets/electrode.gif"
    }
})