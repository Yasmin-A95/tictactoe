// deploy every significant change

const players = {
  playerX: "X",
  playerO: "O",
  xTurns: [],
  oTurns: [],
  strike: function (xTurns, oTurns) {
    winningCombinations: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      if (winningCombinations[i] === xTurns) {
        return (winner = "X");
      } else if (winningCombinations[i] === oTurns) {
        return (winner = "O");
      }
    }
  },
};
