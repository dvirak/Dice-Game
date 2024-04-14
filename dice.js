// Create function to execute on load
//  should run through range and select number 1 to 6
//  should concoct number with string to display picture in img1 and img2
//    querySelector(.img1).style.src = "./dice + number"
//  should compare numbers of both die and change h1 to declare winner
const diceList = [];
const dice1 = Math.ceil(Math.random() * 5);
const dice2 = Math.ceil(Math.random() * 5);

function diceRoll() {
  createDiceList();
  pickDice();
  pickWinner();
  console.log(document.querySelector("h1").text);
  console.log(document.querySelector("h1").innerText);
  console.log(document.querySelector("h1").innerHtml);
}

function createDiceList() {
  for (let i = 1; i < 7; i++) {
    diceList.push(`dice${i}.png`);
  }
}

function pickDice() {
  diceName1 = diceList[dice1];
  diceName2 = diceList[dice2];
  document.querySelector(".img1").src = `./images/${diceName1}`;
  document.querySelector(".img2").src = `./images/${diceName2}`;
}

function pickWinner() {
  if (dice1 > dice2) {
    document.querySelector("h1").innerText = "Player 1 is the winner!";
  } else if (dice1 < dice2) {
    document.querySelector("h1").innerText = "Player 2 is the winner!";
  } else {
    document.querySelector("h1").innerText = "It's a tie!";
  }
}
