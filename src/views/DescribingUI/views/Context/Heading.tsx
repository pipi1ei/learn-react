import { useContext, type ReactNode } from 'react';
import { LevelContext } from './LevelContext';

export interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1 className="text-3xl font-bold">{children}</h1>;
    case 2:
      return <h2 className="text-2xl font-bold">{children}</h2>;
    case 3:
      return <h3 className="text-xl font-bold">{children}</h3>;
    case 4:
      return <h4 className="text-lg font-bold">{children}</h4>;
    case 5:
      return <h5 className="text-base font-bold">{children}</h5>;
    case 6:
      return <h6 className="text-sm font-bold">{children}</h6>;
    default:
      throw new Error('未知的 level: ' + level);
  }
}
