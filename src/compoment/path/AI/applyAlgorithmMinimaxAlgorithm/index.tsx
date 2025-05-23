import React, { useState, useEffect } from "react";
import styles from "./TicTacToe.module.scss";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [moveHistory, setMoveHistory] = useState<number[]>([]);
  const [playerMoves, setPlayerMoves] = useState<number[]>([]);
  const [aiMoves, setAiMoves] = useState<number[]>([]);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [removedMove, setRemovedMove] = useState<number | null>(null); // Theo dõi ô bị xóa
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null); // Lưu tổ hợp chiến thắng

  const checkWinner = (board: string[]): { winner: string | null; combo: number[] | null } => {
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
        return { winner: board[a], combo };
      }
    }

    return { winner: board.includes("") ? null : "Draw", combo: null };
  };

  const minimax = (
    board: string[],
    depth: number,
    isMaximizing: boolean,
    alpha: number,
    beta: number
  ): number => {
    const { winner } = checkWinner(board);
    if (winner === "X") return -10 + depth;
    if (winner === "O") return 10 - depth;
    if (winner === "Draw") return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          board[i] = "O";
          const score = minimax(board, depth + 1, false, alpha, beta);
          board[i] = "";
          bestScore = Math.max(score, bestScore);
          alpha = Math.max(alpha, bestScore);
          if (beta <= alpha) break;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          board[i] = "X";
          const score = minimax(board, depth + 1, true, alpha, beta);
          board[i] = "";
          bestScore = Math.min(score, bestScore);
          beta = Math.min(beta, bestScore);
          if (beta <= alpha) break;
        }
      }
      return bestScore;
    }
  };

  const findBestMove = (currentBoard: string[]): number => {
    let bestScore = -Infinity;
    let move = -1;

    if (checkWinner(currentBoard).winner) return move;

    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === "") {
        const newBoard = [...currentBoard];
        newBoard[i] = "O";
        const score = minimax(newBoard, 0, false, -Infinity, Infinity);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  };

  const handleClick = (index: number) => {
    const { winner } = checkWinner(board);
    if (board[index] || winner || !isPlayerTurn || isAiThinking) return;

    const newBoard = [...board];
    let newPlayerMoves = [...playerMoves];
    let newMoveHistory = [...moveHistory];

    // Nếu người chơi đã đi 3 nước, xóa nước đi đầu tiên
    let removed = null;
    if (newPlayerMoves.length >= 3) {
      removed = newPlayerMoves.shift()!;
      newBoard[removed] = "";
    }

    // Thêm nước đi mới
    newBoard[index] = "X";
    newPlayerMoves.push(index);
    newMoveHistory.push(index);

    setBoard(newBoard);
    setPlayerMoves(newPlayerMoves);
    setMoveHistory(newMoveHistory);
    setRemovedMove(removed);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const { winner } = checkWinner(board);

    if (!isPlayerTurn && !winner) {
      setIsAiThinking(true); // Bắt đầu giai đoạn AI suy nghĩ
      timeoutId = setTimeout(() => {
        let newBoard = [...board];
        let newAiMoves = [...aiMoves];
        let newMoveHistory = [...moveHistory];
        let removed = null;

        // Nếu AI đã đi 3 nước, xóa nước đi đầu tiên
        if (newAiMoves.length >= 3) {
          removed = newAiMoves.shift()!;
          newBoard[removed] = "";
        }

        // Tìm nước đi tốt nhất
        const bestMove = findBestMove(newBoard);
        if (bestMove !== -1) {
          newBoard[bestMove] = "O";
          newAiMoves.push(bestMove);
          newMoveHistory.push(bestMove);

          setBoard(newBoard);
          setAiMoves(newAiMoves);
          setMoveHistory(newMoveHistory);
          setRemovedMove(removed);
          setIsPlayerTurn(true);
        }
        setIsAiThinking(false); // Kết thúc giai đoạn AI suy nghĩ
      }, 3000); // 3 giây
    } else if (winner) {
      setIsAiThinking(false); // Đảm bảo AI không suy nghĩ nếu trò chơi kết thúc
      setWinningCombo(checkWinner(board).combo);
    }

    // Dọn dẹp timeout
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPlayerTurn, board, aiMoves, moveHistory]);

  const resetGame = () => {
    if (isAiThinking) return; // Ngăn reset khi AI đang suy nghĩ
    setBoard(Array(9).fill(""));
    setPlayerMoves([]);
    setAiMoves([]);
    setMoveHistory([]);
    setIsPlayerTurn(true);
    setIsAiThinking(false);
    setRemovedMove(null);
    setWinningCombo(null);
  };

  const { winner } = checkWinner(board);

  return (
    <div className={styles.ticTacToe}>
      <h1>Tic-Tac-Toe</h1>
      <div className={`${styles.board} ${winner ? styles.gameOver : ""} ${isAiThinking ? styles.disabled : ""}`}>
        {board.map((cell, index) => (
          <div
            key={index}
            className={`${styles.cell} ${styles[cell]} ${removedMove === index ? styles.removed : ""} ${
              winningCombo?.includes(index) ? styles.winning : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <p className={styles.moveCount}>
        Player (X) moves: {playerMoves.length} / 3 | AI (O) moves: {aiMoves.length} / 3
      </p>
      {isAiThinking && <div className={styles.thinking}>AI is thinking...</div>}
      {removedMove !== null && !isAiThinking && (
        <div className={styles.removedMessage}>
          {`Oldest move at position ${removedMove} removed!`}
        </div>
      )}
      {winner && (
        <p className={styles.winner}>
          {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </p>
      )}
      <button
        className={`${styles.button} ${isAiThinking ? styles.disabledButton : ""}`}
        onClick={resetGame}
        disabled={isAiThinking}
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;