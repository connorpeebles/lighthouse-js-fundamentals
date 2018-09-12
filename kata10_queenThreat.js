function generateBoard(whiteQueen, blackQueen) {
  var board = [];
  for (var row = 0; row < 8; row++) {
    board.push([]);
    for (var column = 0; column < 8; column++) {
      if (whiteQueen[0] === column && whiteQueen[1] === row || blackQueen[0] === column && blackQueen[1] === row) {
        board[row].push(1);
      } else {
        board[row].push(0);
      }
    }
  }
  return board;
}

function findQueens(board) {
  var queens = [];
  for (var row = 0; row < 8; row++) {
    for (var column = 0; column < 8; column++) {
      if (board[row][column] === 1) {
        queens.push([column, row]);
      }
    }
  }
  return queens;
}

function queenThreat(board) {
  var threat = false;
  var queens = findQueens(board);
  var rowDiff = Math.abs(queens[1][1] - queens[0][1]);
  var colDiff = Math.abs(queens[1][0] - queens[0][0]);
  if (rowDiff === 0 || colDiff === 0 || rowDiff === colDiff) {
    threat = true;
  }
  return threat;
}

var board1 = generateBoard([0,0],[7,5]);
var board2 = generateBoard([0,5],[5,0]);
var board3 = generateBoard([3,0],[3,7]);
var board4 = generateBoard([6,1],[2,1]);
var board5 = generateBoard([4,7],[1,6]);
var board6 = generateBoard([4,6],[1,3]);

console.log(board1);
console.log(board2);
console.log(board3);
console.log(board4);
console.log(board5);
console.log(board6);

console.log(queenThreat(board1));
console.log(queenThreat(board2));
console.log(queenThreat(board3));
console.log(queenThreat(board4));
console.log(queenThreat(board5));
console.log(queenThreat(board6));