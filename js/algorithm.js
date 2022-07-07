const oRandomMove = function () {
  const num1 = Math.floor(Math.random() * wins.length);
  const num2 = Math.floor(Math.random() * wins[num1].length);

  const move = wins[num1][num2];
  if (boardState[move] !== "O" && boardState[move] !== "X") {
    //boardstate[move] ends up just being the tilenumber
    boardState[move] = Player_O;
    $(tiles[move]).text(Player_O);
    turn = Player_X;
  } else if (isDraw) {
    oRandomMove();
  }
};

const isThereAWinnningMove = function (player) {
  for (const win of wins) {
    //loop
    //win array position 0-2
    const tileVal0 = boardState[win[0]];
    const tileVal1 = boardState[win[1]];
    const tileVal2 = boardState[win[2]];

    if (
      (tileVal0 === player && tileVal1 === tileVal0 && tileVal2 === "*") ||
      (tileVal1 === player && tileVal2 === tileVal1 && tileVal0 === "*") ||
      (tileVal2 === player && tileVal0 === tileVal2 && tileVal1 === "*")
    ) {
      return true;
    } else {
      return false;
    }
  }
};

const howManyLeft = function (boardState) {
  let arr = [];
  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] === "*") {
      console.log(boardState[i] + " this is the next * in boardState");
    }
  }
};

// this machine outputs the data-index of the next avaliable move
const miniMax = function (boardState, turn) {
  let nextMove = nextMoveTile(boardState);

  if (checkWinnerMiniMax()) {
    return { score: +10 };
  } else if (!checkWinner()) {
    return { score: -10 };
  } else if (!boardState.includes("*")) {
    return { score: 0 };
  }
  let moveScores = [];
};
