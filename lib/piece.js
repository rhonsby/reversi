function Piece(color) {
  this.color = color;
}

Piece.prototype.flip = function () {
  this.color = ((this.color === "Black") ? "White" : "Black");
};

exports.Piece = Piece;
