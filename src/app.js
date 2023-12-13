import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(randomizerSuit());
  document.querySelector(".card").innerHTML = randomizerNumber();
};

let randomizerNumber = () => {
  let number = [
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
  let indexnumber = Math.floor(Math.random() * number.length);
  return number[indexnumber];
};

let randomizerSuit = () => {
  let suits = ["diamond", "spade", "heart", "club"];
  let indexsuit = Math.floor(Math.random() * suits.length);

  return suits[indexsuit];
};
