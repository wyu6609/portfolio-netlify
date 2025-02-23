export const generateEmptyBoard = () =>
  Array(4)
    .fill()
    .map(() => Array(4).fill(null));

export const addRandomTile = (board) => {
  let emptyTiles = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === null) emptyTiles.push({ row, col });
    }
  }
  if (emptyTiles.length === 0) return board;

  const { row, col } =
    emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  board[row][col] = Math.random() < 0.9 ? 2 : 4;
  return board;
};

export const moveTiles = (board, direction) => {
  let newBoard = board.map((row) => row.slice());
  let moved = false,
    score = 0;

  const slide = (row) => {
    let newRow = row.filter((val) => val);
    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2;
        score += newRow[i];
        newRow[i + 1] = null;
      }
    }
    return newRow.filter((val) => val);
  };

  const handleMove = (reverse = false, transpose = false) => {
    for (let i = 0; i < 4; i++) {
      let row = transpose ? newBoard.map((r) => r[i]) : newBoard[i];
      if (reverse) row.reverse();
      let newRow = slide(row);
      while (newRow.length < 4) newRow.push(null);
      if (reverse) newRow.reverse();
      if (transpose) {
        newBoard.forEach((r, j) => (r[i] = newRow[j]));
      } else {
        newBoard[i] = newRow;
      }
      if (JSON.stringify(row) !== JSON.stringify(newRow)) moved = true;
    }
  };

  switch (direction) {
    case "up":
      handleMove(false, true);
      break;
    case "down":
      handleMove(true, true);
      break;
    case "left":
      handleMove(false, false);
      break;
    case "right":
      handleMove(true, false);
      break;
    default:
      return { newBoard, score, moved };
  }

  return { newBoard, score, moved };
};
