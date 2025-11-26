import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

export interface SectionContentProps {
  title: string;
  desc?: string;
  children?: ReactNode;
}

export default function SectionContent({ title, desc, children }: SectionContentProps) {
  return (
    <>
      <h1 className="mt-0 break-words text-3xl font-bold leading-tight">{title}</h1>
      {desc && (
        <div className="text-xl leading-relaxed">
          <p className="whitespace-pre-wrap my-4">{desc}</p>
        </div>
      )}
      {children || <Outlet />}
    </>
  );
}
