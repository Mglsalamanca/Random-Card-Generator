/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function deckbuilder() {
    const numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const pintas = ["Hearts", "Diamonds", "Spades", "Clubs"];

    const cards = [];
    for (let p = 0; p < pintas.length; p++) {
      for (let n = 0; n < numeros.length; n++) {
        const numero = numeros[n];
        const pinta = pintas[p];
        cards.push({ numero, pinta });
      }
    }
    return cards;
  }

  function ramdomcard(cards) {
    const random = Math.floor(Math.random() * 51);
    const pintacarta = cards[random].pinta;
    const numerocarta = cards[random].numero;
    if (pintacarta == "Diamonds" || pintacarta == "Hearts") {
      document.getElementById("mid").style.color = "red";
      document.getElementById("top").style.color = "red";
      document.getElementById("bottom").style.color = "red";
    } else if (pintacarta == "Spades" || pintacarta == "Clubs") {
      document.getElementById("mid").style.color = "black";
      document.getElementById("top").style.color = "black";
      document.getElementById("bottom").style.color = "black";
    }

    let figura = document.querySelectorAll(".figura");
    figura.forEach(item => {
      if (pintacarta === "Diamonds") {
        item.innerHTML = "&" + "diams" + ";";
      } else {
        item.innerHTML = "&" + pintacarta.toLowerCase() + ";";
      }
    });

    console.log(figura);

    let numero = document.querySelectorAll(".numero");
    numero.forEach(item => {
      item.innerHTML = numerocarta;
    });
    console.log(numero);
  }
  const cards = deckbuilder();
  setInterval(ramdomcard, 10000, cards);
  function boton() {
    const cards = deckbuilder();
    ramdomcard(cards);
    console.log("boton funciona");
  }
  document.getElementById("boton").onclick = function() {
    boton();
  };
};
//<div class="container">
//<div class="row" style="height: 200px;">
//<div class="col align-self-start" style="background-color: green;">
//One of three columns
//</div>
//<div class="col align-self-center" style="background-color: green;">
//One of three columns
//</div>
//<div class="col align-self-end" style="background-color: green;">
//One of three columns
//</div>
//</div>
//</div>
