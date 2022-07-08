//this knows NOTHING about rules it simply connects the DOM to the rules in scripts.js
let turns = [];
const tiles = $(".tiles");
const button = $("button");
let turn = Player_X;

const gameOverArea = $("#game-over-area");

const gameOverText = $("#game-over-text");

const playAgainButton = $("#play-again");

const gameScore = $("#game-score");

const gameOverScreen = function (winner) {
  let text = "Draw!";
  if (winner != "Draw") {
    text = `winner is ${winner}`;
  }
  gameOverArea.addClass("visible");
  gameOverText.text(text);
  gameScore.text(winnerArr);
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
    turns.push(1);
    oRandomMove();
  }
  checkWinner();
};

tiles.on("click", clickFunction);
//
button.on("click", function () {
  boardState = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
  turns = [];
  tiles.each(function (index, tile) {
    $(tile).text("");
  });
  turn = Player_X;
  gameOverArea.removeClass("visible");
  gameOverArea.addClass("hidden");
});
