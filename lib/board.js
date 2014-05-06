var Piece = require("./piece.js").Piece;

function Board() {
  this.grid = [];

  for (i = 0; i < 8; i++){
    var row = [];
    for (j = 0; j < 8; j++){
      row.push(null);
    }
    this.grid.push(row);
  }

  this.grid[3][3] = new Piece('Black');
  this.grid[3][4] = new Piece('White');
  this.grid[4][3] = new Piece('White');
  this.grid[4][4] = new Piece('Black');
}

Board.prototype.full = function () {
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
}

Board.prototype.isValidBoardPos = function (pos) {
  var x = pos[0];
  var y = pos[1];

  if (x > 7 || x < 0 || y > 7 || y < 0) {
    return false;
  } else if (pos.length < 2) {
    return false;
  } else {
    return true;
  }
}

Board.prototype.isEnemyPiece = function(pos, ourColor) {
  // if (this.position(pos).color
}

Board.prototype.addDeltas = function(pos, delta) {
  return [pos[0] + delta[0], pos[1] + delta[1]];
}

Board.prototype.validMoves = function (pos, color) {
  if (!this.isValidBoardPos(pos)) return false;

  var deltas = [[-1,-1],[-1,0],[-1,1],[0,1],[0,-1],[1,1],[1,-1],[1,0]];
  var piecesToFlip = []

  for (var i = 0; i < deltas.length; i++){
    var current_delta = deltas[i];
    var potentialPiecesToFlip = []
    var newPos = this.addDeltas(pos, current_delta);

    while(this.isValidBoardPos(newPos) && this.isEnemyPiece(newPos) ) {
      potentialPiecesToFlip.push(this.position(newPos));
      newPos = this.addDeltas(newPos, current_delta);
    }

    if (this.isValidBoardPos(newPos) && (this.position(newPos))) {
      piecesToFlip = piecesToFlip.concat(potentialPiecesToFlip);
    }
  }
  return piecesToFlip;
}

// Other helper methods may be helpful!

exports.Board = Board;

//
//
//
//
board = new Board();
console.log(board);




