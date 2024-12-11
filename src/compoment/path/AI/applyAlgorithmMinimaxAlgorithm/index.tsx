import React, { useState } from "react";
import styles from "./TicTacToe.module.scss";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const checkWinner = (board: string[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.includes("") ? null : "Draw";
  };

  const minimax = (board: string[], depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(board);
    if (winner === "X") return -10 + depth;
    if (winner === "O") return 10 - depth;
    if (winner === "Draw") return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          board[i] = "O";
          const score = minimax(board, depth + 1, false);
          board[i] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          board[i] = "X";
          const score = minimax(board, depth + 1, true);
          board[i] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const findBestMove = (): number => {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "O";
        const score = minimax(board, 0, false);
        board[i] = "";
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  };

  const handleClick = (index: number) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);

    setTimeout(() => {
      if (!checkWinner(newBoard)) {
        const bestMove = findBestMove();
        newBoard[bestMove] = "O";
        setBoard(newBoard);
        setIsPlayerTurn(true);
      }
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsPlayerTurn(true);
  };

  const winner = checkWinner(board);

  return (
    <div className={styles.ticTacToe}>
      <h1>Tic-Tac-Toe</h1>
      <div className={`${styles.board} ${winner ? styles.gameOver : ""}`}>
        {board.map((cell, index) => (
          <div
            key={index}
            className={`${styles.cell} ${styles[cell]}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && <p className={styles.winner}>{winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}</p>}
      <button className={styles.button} onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
