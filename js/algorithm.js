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

  const move = wins[num1][num2];
  if (boardState[move] === "*") {
    boardState[move] = Player_O;
    $(tiles[move]).text(Player_O);
    turn = Player_X;
  } else if (boardState.includes("*")) {
    oRandomMove();
  }
};
