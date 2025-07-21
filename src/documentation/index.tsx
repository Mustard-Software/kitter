import type { ReactNode } from 'react';
import { ChevronUp } from 'lucide-react';

export const Documentation = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen justify-center">
    <a
      href="#toc"
      className="fixed top-4 right-4 flex flex-row items-center gap-4 fill-fg-light text-fg-light"
    >
      <span className="font-mono text-red-500">table of contents</span>
      <ChevronUp className="w-4 h-4" />
    </a>
    <div className="max-w-[1000px] w-full">{children}</div>
  </div>
);

export interface PageProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  id?: string;
}

export const Page = ({
  children,
  className = '',
  center = false,
  id,
}: PageProps) => {
  const container = `min-h-screen w-full ${className}`;
  const layout = center ? 'flex flex-col justify-center' : '';

  return (
    <div className={`${container} ${layout}`} id={id}>
      {children}
    </div>
  );
};

export interface IContents {
  label: string;
  id: string;
}

export const Contents = ({ contents }: { contents: IContents[] }) => (
  <div className="flex flex-row gap-8 items-center w-full font-mono font-light underline decoration-dotted justify-center mt-8">
    {contents.map(({ label, id }) => (
      <a key={id} href={`#${id}`}>
        {label}
      </a>
    ))}
  </div>
);

export const PageTitle = ({ title }: { title: string }) => (
  <h2 className="text-center text-4xl font-light mb-12 pt-20 text-fg font-mono">
    {title}
  </h2>
);

export const PageDescription = ({ children }: { children: ReactNode }) => (
  <div className="text-left text-md font-light mb-20 text-fg-light flex flex-col gap-8 font-mono">
    {children}
  </div>
);

export interface PageSectionProps {
  children: ReactNode;
  title: string;
}

export const PageSection = ({ children, title }: PageSectionProps) => (
  <div className="flex w-full flex-col items-center justify-center gap-4">
    <h2 className="text-2xl font-light text-left w-full font-mono text-fg-light">
      {title}
    </h2>
    {children}
  </div>
);

export const InlineCode = ({ children }: { children: ReactNode }) => (
  <code className="type-code-inline">{children}</code>
);
