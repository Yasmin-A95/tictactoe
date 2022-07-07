const oRandomMove = function () {
  const num1 = Math.floor(Math.random() * wins.length);
  const num2 = Math.floor(Math.random() * wins[num1].length);

  const move = wins[num1][num2];
  if (boardState[move] === "*") {
    //boardstate[move] ends up just being the tilenumber
    boardState[move] = Player_O;
    $(tiles[move]).text(Player_O);
    turn = Player_X;
  } else if (boardState.includes("*")) {
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

const miniMax = function (potentialMoves, player) {
  //
};
