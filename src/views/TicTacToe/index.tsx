import { useState } from 'react';
import Board from './components/Board';
import type { BoardProps } from './components/Board';

type Squares = BoardProps['squares'];

export default function TicTacToe() {
  const [history, setHistory] = useState<Squares[]>([
    Array.from({ length: 9 }).fill(null) as Squares,
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: Squares) => {
    const nextHistory = [...history, nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_, idx) => {
    let description;
    if (idx > 0) {
      description = `Go to move #${idx}`;
    } else {
      description = 'Go to Game start';
    }
    return (
      <li key={idx}>
        <span className="text-primary cursor-pointer" onClick={() => jumpTo(idx)}>
          {description}
        </span>
      </li>
    );
  });

  return (
    <div flex="~ gap-5">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <ol>{moves}</ol>
    </div>
  );
}
