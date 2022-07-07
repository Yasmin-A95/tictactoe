/*
if (2 / 3 of any wins ) {
        place the third    
   } else if (opponent has two in a row) {
     block the third
   } else {
    make a random move
   }
   seems like a pretty good start even with those few if else's

   find a way to iterate through and compare moves until one matches the condition, 
   if none match all the way up to moves.length ... exit that conditional and move on to the next

   **so it'll get a move, compare it to board state to see if it's possible **
   
   all the way through wins.length (if one isn't found earlier and thus leaving the conditional)
*/

const oRandomMove = function () {
  const num1 = Math.floor(Math.random() * wins.length);
  const num2 = Math.floor(Math.random() * wins[num1].length);

  const move = wins[num1][num2]; //because that's this, it's just taking it from the wins algorithm for no real reason at this point
  if (boardState[move] === "*") {
    //boardstate[move] ends up just being the tilenumber
    boardState[move] = Player_O;
    $(tiles[move]).text(Player_O);
    turn = Player_X;
  } else if (boardState.includes("*")) {
    oRandomMove();
  }
};

const unbeatableMoves = function () {
  let winningMove;

  for (const win of wins) {
    //win array position 0-2
    const tileVal0 = boardState[win[0]];
    const tileVal1 = boardState[win[1]];
    const tileVal2 = boardState[win[2]];

    //names so its less confusing to read
    const twoTilesMatchWinStrategy =
      tileVal0 === tileVal1 || tileVal1 === tileVal2 || tileVal2 === tileVal0;
    const areTheyPlayer_0 = [tileVal0, tileVal1, tileVal2].includes(Player_O);
    const isThereAFreeMove = [tileVal0, tileVal1, tileVal2].includes("*");
    if (twoTilesMatchWinStrategy && areTheyPlayer_0 && isThereAFreeMove) {
      winningMove = true;
      let indexOfFreeTile = [tileVal0, tileVal1, tileVal2].indexOf("*");
      winningMove = win[indexOfFreeTile];
    }
  }
  console.log(winningMove);

  oRandomMove();
};

for (i = 0; i < wins.length; i++) {
  let thething;
  thething = wins[i];
}
