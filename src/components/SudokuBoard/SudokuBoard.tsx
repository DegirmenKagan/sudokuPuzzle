import { useState } from "react";
import Cell from "../Cell/Cell";

const fillEmptyBoard = () => {
  return Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
};

const SudokuBoard = () => {
  const [board, setBoard] = useState(fillEmptyBoard());

  const handleChange = (value: string, row: number, col: number) => {
    const newBoard = board.map((r: number[], rIndex) =>
      r.map((c, cIndex) => (rIndex === row && cIndex === col ? value : c))
    );
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((col, colIndex) => (
            <Cell
              key={colIndex}
              value={col}
              onChange={handleChange}
              row={rowIndex}
              col={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;
