export interface SquareProps {
  value: 'X' | 'O';
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="w34px h34px p0 -mr-1px -mt-1px bg-white float-left font-bold leading-34px cursor-pointer"
      text="24px center"
      border="~ solid #999"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareProps['value'][];
  onPlay: (squares: SquareProps['value'][]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleSquareClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="mb-10px">{status}</div>
      <div className="clear-both">
        <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
      </div>
      <div className="clear-both">
        <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
      </div>
      <div className="clear-both">
        <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
