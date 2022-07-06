//this knows NOTHING about rules it simply connects the DOM to the rules in scripts.js

//lots of event handlers and all the dom manipulation

//deploy every significant change
// const render = function () {
//this handy render function will update every single part of  DOM with the latest values from the board

// in render I'll use jQuery to grab parts of the dom ${likethis}
// and update the display like this $("things")
// $(document).ready(function () {
//
// render();
// the things
const tiles = $(".tiles");
const Player_X = "X";
const Player_O = "O";
let turn = Player_X;

let boardState = Array(tiles.length);
boardState.fill(null);
// could also do like this
// let boardState = [*,*,*,*,*,*,*,*] since I know how many tiles there are..

const gameOverArea = $("#game-over-area");

const gameOverText = $("#game-over-text");

const playAgainButton = $("#play-again");

const clickFunction = function (event) {
  if (gameOverArea.is(":visible")) {
    return;
  }
  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }
  if (turn === Player_X) {
    tile.innerText = Player_X;
    boardState[tileNumber] = Player_X;
    turn = Player_O;
  } else {
    tile.innerText = Player_O;
    boardState[tileNumber] = Player_O;
    turn = Player_X;
  }
};

tiles.on("click", clickFunction);

// I may need to call render in every single event handler in here

// });

// };
