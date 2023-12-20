function ChessBoard() {
  const renderSquare = (square) => {
    const isLightSquare =
      (square.charCodeAt(0) - 97 + square.charCodeAt(1) - 49) % 2 === 0;
    // console.log(square);
    return (
      <div
        key={square}
        className={`square ${isLightSquare ? "light" : "dark"}`}
      />
    );
  };

  const board = [];
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const square = String.fromCharCode(97 + file) + (rank + 1);
      board.push(renderSquare(square));
    }
  }

  //   console.log(board);
  return <div className="chessboard">{board}</div>;
}
export default ChessBoard;
