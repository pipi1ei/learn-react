import { useContext, type ReactNode } from 'react';
import { LevelContext } from './LevelContext';

export default function Section({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);
  return (
    <section p-4 border="~ solid black rounded">
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}
