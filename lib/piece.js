function Piece(color) {
  this.color = color;
}

Piece.prototype.flip = function () {
  this.color = (this.color === "black" ? "white" : "black");
};

exports.Piece = Piece;
