import type { ReactNode } from 'react';
import { ChevronUp } from 'lucide-react';
import { getKitterConfig } from '../kitter.config';

/**
 * Props for the `Documentation` component.
 * Controls the layout container and max width.
 */
export interface DocumentationProps {
  /** Content to display inside the documentation layout */
  children: ReactNode;
  /** Maximum width of the inner content container (e.g., '1000px' or '80ch') */
  maxWidth?: string | number;
  /** Optional additional class names for the outer container */
  className?: string;
}

/**
 * Wraps your entire kitter.js document in a centered container.
 *
 * @returns A layout wrapper with customizable max width
 */
export const Documentation = ({
  children,
  maxWidth,
  className,
}: DocumentationProps) => {
  const config = getKitterConfig()?.styles?.documentation?.documentation ?? {};

  const resolvedMaxWidth = maxWidth ?? config.maxWidth ?? '1000px';
  const resolvedClassName =
    `${config.className ?? ''} ${className ?? ''}`.trim();

  return (
    <>
      <a id="scroll-to-top-anchor" />
      <div className={`flex min-h-screen justify-center ${resolvedClassName}`}>
        <div className="w-full" style={{ maxWidth: resolvedMaxWidth }}>
          {children}
        </div>
      </div>
    </>
  );
};

/** Interface for the kitter.js ScrollToTop component. */
export interface ScrollToTopProps {
  /** Tailwind classes for the label text */
  textClassName?: string;
  /** Tailwind classes for the icon element */
  iconClassName?: string;
  /** Color override for the default icon */
  iconColor?: string;
  /** Optional custom icon node to replace the default icon */
  iconOverride?: ReactNode;
  /** Optional override for the link text (default: "table of contents") */
  textOverride?: string;
}

/**
 * Creates a fixed-position "scroll to top" link in the top-right corner.
 * Intended for use within a kitter.js document.
 *
 * @returns JSX.Element
 */
export const ScrollToTop = ({
  textClassName,
  iconClassName,
  iconColor,
  iconOverride,
  textOverride,
}: ScrollToTopProps) => {
  const config = getKitterConfig()?.styles?.documentation?.scrollToTop ?? {};

  const resolvedTextClassName =
    `${config.textClassName ?? ''} ${textClassName ?? ''}`.trim();
  const resolvedTextOverride =
    textOverride ?? config.textOverride ?? 'table of contents';
  const resolvedIconClassName =
    `w-4 h-4 ${config.iconClassName ?? ''} ${iconClassName ?? ''}`.trim();
  const resolvedIconColor = iconColor ?? config.iconColor ?? 'black';

  return (
    <a
      href="#scroll-to-top-anchor"
      className="fixed top-4 right-4 flex flex-row items-center gap-4"
      role="button"
      aria-label="Scroll to top"
    >
      <span className={resolvedTextClassName}>{resolvedTextOverride}</span>
      {iconOverride ? (
        iconOverride
      ) : (
        <ChevronUp
          className={resolvedIconClassName}
          color={resolvedIconColor}
        />
      )}
    </a>
  );
};

/** Interface for the kitter.js Page component. */
export interface PageProps {
  /** Page content */
  children: ReactNode;
  /** Optional additional class names */
  className?: string;
  /** Whether to center the content vertically */
  center?: boolean;
  /** Unique ID used for anchor linking */
  id?: string;
}

/**
 * Creates a new page section within a kitter.js document.
 * Useful for semantic layout and anchor-based navigation.
 *
 * @returns JSX.Element
 */
export const Page = ({
  children,
  className,
  center = false,
  id,
}: PageProps) => {
  const config = getKitterConfig()?.styles?.documentation?.page ?? {};

  const layout = center ? 'flex flex-col justify-center' : '';

  const resolvedClassName =
    `min-h-screen w-full ${layout} ${config.className ?? ''} ${className ?? ''}`.trim();

  return (
    <div className={resolvedClassName} id={id}>
      {children}
    </div>
  );
};

/** Represents a single item in the document's table of contents. */
export type DocumentContentsItem = {
  /** Display label for the TOC item */
  label: string;
  /** Corresponding anchor ID on the page */
  id: string;
};

/** Interface for the kitter.js DocumentContents component. */
export interface DocumentContentsProps {
  /** List of TOC items to render */
  contents: DocumentContentsItem[];
  /** Optional additional class names */
  className?: string;
}

/**
 * Renders a table of contents with anchor links to page sections.
 *
 * @returns JSX.Element
 */
export const DocumentContents = ({
  contents,
  className,
}: DocumentContentsProps) => {
  const config =
    getKitterConfig()?.styles?.documentation?.documentContents ?? {};

  const resolvedClassName = `items-center w-full justify-center ${config.className} ${className}`;

  return (
    <div className={resolvedClassName}>
      {contents.map(({ label, id }) => (
        <a key={id} href={`#${id}`}>
          {label}
        </a>
      ))}
    </div>
  );
};

/** Interface for the kitter.js PageTitle component. */
export interface PageTitleProps {
  /** Text to render as the page title */
  title: string;
  /** Optional additional class names */
  className?: string;
}

/**
 * Renders a stylized title for a page section.
 *
 * @returns JSX.Element
 */
export const PageTitle = ({ title, className }: PageTitleProps) => {
  const config = getKitterConfig()?.styles?.documentation?.pageTitle ?? {};

  const resolvedClassName =
    `text-center ${config.className ?? ''} ${className ?? ''}`.trim();

  return <h2 className={resolvedClassName}>{title}</h2>;
};

/** Interface for the kitter.js PageDescription component. */
export interface PageDescriptionProps {
  /** Description content, typically paragraph text */
  children: ReactNode;
  /** Optional additional class names */
  className?: string;
}

/**
 * Renders a description block below a page title.
 *
 * @returns JSX.Element
 */
export const PageDescription = ({
  children,
  className,
}: PageDescriptionProps) => {
  const config =
    getKitterConfig()?.styles?.documentation?.pageDescription ?? {};

  const resolvedClassName =
    `${config.className ?? ''} ${className ?? ''}`.trim();

  return <div className={resolvedClassName}>{children}</div>;
};

/** Interface for the kitter.js PageSection component. */
export interface PageSectionProps {
  /** Section content */
  children: ReactNode;
  /** Section heading */
  title: string;
  /** Optional additional class names for the title */
  titleClassName?: string;
  /** ID which can be used to link directly to this section */
  id?: string;
}

/**
 * Creates a visually separated section with a title and content.
 *
 * @returns JSX.Element
 */
export const PageSection = ({
  children,
  title,
  titleClassName,
  id,
}: PageSectionProps) => {
  const config = getKitterConfig()?.styles?.documentation?.pageSection ?? {};

  const resolvedTitleClassName =
    `${config.titleClassName ?? ''} ${titleClassName ?? ''}`.trim();

  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-4"
      id={id}
    >
      <h2 className={resolvedTitleClassName}>{title}</h2>
      {children}
    </div>
  );
};
