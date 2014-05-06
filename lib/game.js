var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;

function Game() {
  this.board = new Board();
  // Other attributes?
}

Game.prototype.won = function () {
  if (this.board.isFull()) {
    var blackCounter = 0;

    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        if ((this.board.grid[i][j]).color === 'black' ) blackCounter++;
      }
    }

    var gridSize = Math.pow(this.board.length, 2);
    if (blackCounter > gridSize / 2) {
      return "Black wins!";
    } else if (blackCounter < gridSize / 2) {
      return "White wins!";
    } else {
      return "It's a tie!";
    }
  } else {
    return false;
  }
};

Game.prototype.placePiece = function (pos, color) {
  var x = pos[0];
  var y = pos[1];

  var validMoves = this.board.validMoves(pos, color);
  if (validMoves.length > 0) {
    this.board.grid[x][y] = new Piece(color);
    this.flipPieces(validMoves());

    return true;
  } else {
    console.log("Invalid move");
    return false;
  }
};

Game.prototype.flipPieces = function (tilePositions) {
  for (var i = 0; i < tilePositions.length; i++) {
    piece = this.board.position(tilePositions[i]);
    piece.flip();
  }
};

Game.prototype.runLoop = function () {
};

exports.Game = Game;
game = new Game();