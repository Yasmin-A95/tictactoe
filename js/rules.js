//this code knows NOTHING about the DOM

//just rules and logic for "gameplay"
// no css no anything visual, that doesn't exist. the game IS the rules

//this is the single source of truth about who's turn it is and what 'tiles' belong to who

//deploy every significant change
const Player_X = "X";
const Player_O = "O";

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //
  [0, 4, 8],
  [2, 4, 6],
];
const winnerArr = [];
boardState = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];

const checkWinner = function () {
  for (const win of wins) {
    const tileVal0 = boardState[win[0]];
    const tileVal1 = boardState[win[1]];
    const tileVal2 = boardState[win[2]];
    if (tileVal0 != "*" && tileVal0 === tileVal1 && tileVal0 === tileVal2) {
      winnerArr.push(tileVal0);
      gameOverScreen(tileVal0);
      return;
    }
  }
  if (!boardState.includes("*")) {
    gameOverScreen("Draw");
  }
};

