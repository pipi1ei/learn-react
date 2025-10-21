interface ButtonProps {
  count: number;
  onClick: () => void;
}

export function MyButton({ count, onClick }: ButtonProps) {
  return (
    <>
      <button
        className="px-4 py-2 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200"
        border="~ solid blue-300"
        onClick={onClick}
      >
        count is: {count}
      </button>
    </>
  );
}
