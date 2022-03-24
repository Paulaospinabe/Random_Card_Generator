/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = () => {
  let divsPintas = document.querySelectorAll(".pintas");
  let divnumero = document.querySelector(".numero");
  let pinta = generateRandomSuit();
  console.log(pinta);
  if (pinta == "♥" || pinta == "♦") {
    divsPintas.forEach(divPinta => {
      divPinta.innerHTML = pinta;
      divPinta.style.color = "red";
    });
    divnumero.style.color = "red";
  }
  divsPintas.forEach(divPinta => {
    divPinta.innerHTML = pinta;
  });
  let numero = generateRandomNumber();

  divnumero.innerHTML = numero;
};

let generateRandomNumber = () => {
  let numbers = [
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
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
