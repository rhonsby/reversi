var Piece = require("./piece.js").Piece;

function Board() {
  this.grid = [];

  for (var i = 0; i < 8; i++) {
    var row = [];
    for (var j = 0; j < 8; j++) {
      row.push(null);
    }

    this.grid.push(row);
  }

  this.grid[3][3] = new Piece('black');
  this.grid[3][4] = new Piece('white');
  this.grid[4][3] = new Piece('white');
  this.grid[4][4] = new Piece('black');
}

Board.prototype.isFull = function () {
  for (i = 0; i < 8; i++){
    for (j = 0; j < 8; j++){
      if (this.grid[i][j] === null){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.position = function (pos) {
  var x = pos[0];
  var y = pos[1];

  return this.grid[x][y];
};

Board.prototype.isValidBoardPos = function (pos) {
  var x = pos[0];
  var y = pos[1];

  return !(x < 0 || x > 7 || y < 0 || y > 7);
};

Board.prototype.isEnemyPiece = function(pos, thisColor) {
  var tile = this.position(pos);
  return (tile && tile.color !== thisColor);
};

Board.prototype.addPositions = function(posOne, posTwo) {
  return [posOne[0] + posTwo[0], posOne[1] + posTwo[1]];
};

Board.prototype.DELTAS =
  [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, 1], [1, -1], [1, 0]];

Board.prototype.validMoves = function (pos, color) {
  if (!this.validBoardPos(pos)) return false;

  // var piecesToFlip = []

  // for (var i = 0; i < deltas.length; i++){
  //   var current_delta = deltas[i];
  //   var potentialPiecesToFlip = []
  //   var newPos = this.addDeltas(pos, current_delta);

  //   while(this.isValidBoardPos(newPos) && this.isEnemyPiece(newPos) ) {
  //     potentialPiecesToFlip.push(this.position(newPos));
  //     newPos = this.addDeltas(newPos, current_delta);
  //   }

  //   if (this.isValidBoardPos(newPos) && (this.position(newPos))) {
  //     piecesToFlip = piecesToFlip.concat(potentialPiecesToFlip);
  //   }
  // }
  // return piecesToFlip;
};

exports.Board = Board;

//
//
//
//
//
//
//

board = new Board();
console.log(board);




