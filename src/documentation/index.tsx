import type { ReactNode } from 'react';
import { ChevronUp } from 'lucide-react';

/** Interface for the kitter.js Documentation component. */
export interface DocumentationProps {
  children: ReactNode;
  maxWidth?: string | number;
  className?: string;
}

/** Wrap your entire kitter.js document with this component. */
export const Documentation = ({
  children,
  maxWidth = '1000px',
  className,
}: DocumentationProps) => (
  <>
    <a id="scroll-to-top-anchor" />
    <div className={`flex min-h-screen justify-center ${className}`}>
      <div className="w-full" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  </>
);

/** Interface for the kitter.js ScrollToTop component. */
export interface ScrollToTopProps {
  textClassName?: string;
  iconClassName?: string;
  iconColor?: string;
  iconOverride?: ReactNode;
  textOverride?: string;
}

/** Creates a return to top link in the top right corner of a kitter.js document */
export const ScrollToTop = ({
  textClassName,
  iconClassName,
  iconColor,
  iconOverride,
  textOverride,
}: ScrollToTopProps) => {
  return (
    <a
      href="#scroll-to-top-anchor"
      className="fixed top-4 right-4 flex flex-row items-center gap-4"
      role="button"
      aria-label="Scroll to top"
    >
      <span className={`font-mono ${textClassName}`}>
        {textOverride ? textOverride : 'table of contents'}
      </span>
      {iconOverride ? (
        iconOverride
      ) : (
        <ChevronUp
          className={`w-4 h-4 ${iconClassName}`}
          color={iconColor ? iconColor : 'black'}
        />
      )}
    </a>
  );
};

/** Interface for the kitter.js Page component. */
export interface PageProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  id?: string;
}

/** Create a Page in your kitter.js document.
 * Make sure to set id for use with the Contents component
 */
export const Page = ({
  children,
  className,
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

/** Object type for a kitter.js DocumentContents item */
export type DocumentContentsItem = {
  label: string;
  id: string;
};

/** Interface for the kitter.js DocumentContents component. */
export interface DocumentContentsProps {
  contents: DocumentContentsItem[];
  className?: string;
}

/** Creates a table of contents for the current kitter.js document */
export const DocumentContents = ({
  contents,
  className,
}: DocumentContentsProps) => (
  <div
    className={`
        grid grid-cols-4 gap-8 items-center w-full font-mono 
        underline decoration-dotted justify-center mt-8
        ${className}
      `}
  >
    {contents.map(({ label, id }) => (
      <a key={id} href={`#${id}`}>
        {label}
      </a>
    ))}
  </div>
);

/** Interface for the kitter.js PageTitle component. */
export interface PageTitleProps {
  title: string;
  className?: string;
}

/** Adds a title to the current kitter.js page */
export const PageTitle = ({ title, className }: PageTitleProps) => (
  <h2
    className={`text-center text-4xl font-light mb-12 pt-20 text-fg font-mono ${className}`}
  >
    {title}
  </h2>
);

/** Interface for the kitter.js PageDescription component. */
export interface PageDescriptionProps {
  children: ReactNode;
  className?: string;
}

/** Adds a description to the current kitter.js page */
export const PageDescription = ({
  children,
  className,
}: PageDescriptionProps) => (
  <div
    className={`text-left text-md font-light mb-20 text-fg-light flex flex-col gap-8 font-mono ${className}`}
  >
    {children}
  </div>
);

/** Interface for the kitter.js PageSection component. */
export interface PageSectionProps {
  children: ReactNode;
  title: string;
  titleClassName?: string;
}

/** Creates a section on the current kitter.js page. */
export const PageSection = ({
  children,
  title,
  titleClassName,
}: PageSectionProps) => (
  <div className="flex w-full flex-col items-center justify-center gap-4">
    <h2
      className={`text-2xl font-light text-left w-full font-mono text-fg-light ${titleClassName}`}
    >
      {title}
    </h2>
    {children}
  </div>
);
