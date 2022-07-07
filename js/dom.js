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
const button = $("button");
let turn = Player_X;
// could also do like this
// let boardState = [*,*,*,*,*,*,*,*] since I know how many tiles there are..

const gameOverArea = $("#game-over-area");

const gameOverText = $("#game-over-text");

const playAgainButton = $("#play-again");

const gameOverScreen = function (winner) {
  let text = "Draw!";
  if (winner != "Draw") {
    text = `winner is ${winner}`;
  }
  gameOverArea.addClass("visible");
  gameOverText.text(text);
};

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
    unbeatableMoves();
  }
  //  else {
  //   tile.innerText = Player_O;
  //   boardState[tileNumber] = Player_O;
  //   turn = Player_X;
  // }
  checkWinner();
};

tiles.on("click", clickFunction);
//
button.on("click", function () {
  boardState = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
  tiles.each(function (index, tile) {
    $(tile).text("");
  });
  turn = Player_X;
  gameOverArea.removeClass("visible");
  gameOverArea.addClass("hidden");
});

// I may need to call render in every single event handler in here

// });

// };
