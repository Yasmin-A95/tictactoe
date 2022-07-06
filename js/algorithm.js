// let thisGuy = wins[num1];
// Math.floor(Math.random() * thisGuy.length);

// num1 is one of the arrays in wins's indicies number
// so its like wins[1] .. or whatever other one
// then thisGuy is wins[1][2] .. or something. Yeah?
// if boardState[wins[1][2]] "*" {
// do stuff
// } else {
//         try again;
//}
//

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
