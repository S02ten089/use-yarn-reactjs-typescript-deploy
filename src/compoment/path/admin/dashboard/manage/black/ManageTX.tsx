import React, { useState } from 'react';
import styles from './App.module.scss';

interface BetCounts {
  Tai: number;
  Suu: number;
}

interface HistoryEntry {
  totalPoints: number;
  gameResult: string;
  bet: string;
  status: string;
}

const App: React.FC = () => {
    const [diceValues, setDiceValues] = useState<number[]>([1, 1, 1]);
    const [total, setTotal] = useState<number>(0);
    const [result, setResult] = useState<string>('');
    const [bet, setBet] = useState<string>('');
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [betCounts, setBetCounts] = useState<BetCounts>({ Tai: 0, Suu: 0 });

    const getWeightedResult = (): string => {
      const totalBets = betCounts.Tai + betCounts.Suu;
      const taiBias = totalBets > 0 ? betCounts.Tai / totalBets : 0.5;
      const randomValue = Math.random();

      return randomValue > taiBias ? 'Suu' : 'Tai';
    };

    const rollDice = (): void => {
      const newDiceValues = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];

      const totalPoints = newDiceValues.reduce((a, b) => a + b, 0);
      const gameResult = totalPoints >= 11 ? 'Tai' : 'Suu';
      const adjustedResult = getWeightedResult();
      setResult(adjustedResult);

      setDiceValues(newDiceValues);
      setTotal(totalPoints);

      const newHistory = [
        ...history,
        {
          totalPoints,
          gameResult: adjustedResult,
          bet,
          status: adjustedResult === bet ? 'Thắng' : 'Thua',
        },
      ];
      setHistory(newHistory);
    };

    const handleBet = (type: keyof BetCounts): void => {
        setBet(type);
      
        setBetCounts((prev) => ({
          ...prev,
          [type]: prev[type] + 1,
        }));
      };

    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Game Tài Sửu</h1>

        <div className={styles.diceContainer}>
          <div className={styles.dice}>
            {diceValues.map((value, index) => (
              <div key={index} className={`${styles.diceFace} ${styles[`dice${value}`]}`}></div>
            ))}
          </div>
          <p className={styles.total}>Tổng điểm: {total}</p>
          <p className={styles.result}>Kết quả: {result}</p>
        </div>

        <div className={styles.betControls}>
          <button
            className={`${styles.betButton} ${bet === 'Tai' ? styles.selected : ''}`}
            onClick={() => handleBet('Tai')}
          >
            Đặt Tài
          </button>
          <button
            className={`${styles.betButton} ${bet === 'Suu' ? styles.selected : ''}`}
            onClick={() => handleBet('Suu')}
          >
            Đặt Sửu
          </button>
          <button className={styles.rollButton} onClick={rollDice} disabled={!bet}>
            Quay Xúc Xắc
          </button>
        </div>

        <div className={styles.history}>
          <h2>Lịch sử chơi</h2>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                Tổng: {entry.totalPoints}, Kết quả: {entry.gameResult}, Cược: {entry.bet}, Trạng thái: {entry.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default App;
