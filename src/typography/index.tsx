import { useRef, useState, useEffect, type ReactNode } from 'react';
import { PageSection } from '../documentation';
import { useKitterConfig } from '../KitterProvider';

/**
 * Props for the `TypographyGroup` component.
 */
export interface TypographyGroupProps {
  /** Title for the typography section */
  title: string;
  /** Children elements to be rendered within the group */
  children: ReactNode;
}

/**
 * A layout wrapper used to display a group of typography samples,
 * organized under a section title.
 *
 * @returns A styled section grouping typography samples
 */
export const TypographyGroup = ({ title, children }: TypographyGroupProps) => {
  const config = useKitterConfig().styles?.typography ?? {};

  return (
    <PageSection title={title}>
      <div className={config.typographyGroup}>{children}</div>
    </PageSection>
  );
};

/**
 * Props for the `TypographySample` component.
 */
export interface TypographySampleProps {
  /** Tailwind or custom class name applied to the sample text */
  className: string;
  /** Sample text to render; defaults to "Typography." */
  sampleText?: string;
}

/**
 * A component that renders a text sample with a given class name,
 * and displays its computed styles (font size, line height, weight, and family).
 *
 * @returns A UI block showing typography appearance and computed values
 */
export const TypographySample = ({
  className,
  sampleText = 'Typography',
}: TypographySampleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [computedStyles, setComputedStyles] = useState('');
  const config = useKitterConfig().styles?.typography ?? {};

  useEffect(() => {
    if (!ref.current) return;

    const style = getComputedStyle(ref.current);
    const fontSize = style.fontSize;
    const lineHeight = style.lineHeight;
    const fontWeight = style.fontWeight;
    const fontFamily = style.fontFamily;

    setComputedStyles(
      `${fontSize} / ${lineHeight}, ${fontWeight}, ${fontFamily}`,
    );
  }, []);

  return (
    <div className="flex flex-col gap-1 mb-8 mt-2">
      <div className={config.sampleTitle}>
        <span>.{className}</span>
      </div>
      <div ref={ref} className={className}>
        {sampleText}
      </div>
      <div className={config.sampleComputedStyles}>
        <span>{computedStyles}</span>
      </div>
    </div>
  );
};
