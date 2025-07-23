import { useRef, useState, useEffect, type ReactNode } from 'react';
import { parse, converter, formatHex } from 'culori';

import { PageSection } from '../documentation';
import { useKitterConfig } from '../KitterProvider';

const oklchConverter = converter('oklch');
const hslConverter = converter('hsl');

/** Creates a kitter.js page section optimized for creating swatch palettes */
export const ColorGroup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <PageSection title={title}>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {children}
    </div>
  </PageSection>
);

/** Interface for the kitter.js ColorSwatch component. */
export interface ColorSwatchProps {
  /**
   * Tailwind CSS background class for the swatch color (e.g., "bg-blue-500").
   * This class will be applied to the swatch element.
   */
  color: string;

  /**
   * The label text displayed next to the color swatch (e.g., "Primary Blue").
   */
  label: string;

  /**
   * Whether to display the HEX color value (e.g., "#1d4ed8").
   * Pass `true` to show it, `false` or omit to hide.
   */
  displayHex?: boolean;

  /**
   * Whether to display the OKLCH color value (e.g., "oklch(62% 0.16 245deg)").
   * Pass `true` to show it, `false` or omit to hide.
   */
  displayOklch?: boolean;

  /**
   * Whether to display the HSL color value (e.g., "hsl(220 60% 50%)").
   * Pass `true` to show it, `false` or omit to hide.
   */
  displayHsl?: boolean;
}

/**
 * Creates a color swatch display using a Tailwind CSS token.
 * Dynamically resolves the actual computed color in the browser and displays optional formats (hex, OKLCH, HSL).
 *
 * This must be used in a client component since it relies on getComputedStyle in useEffect.
 *
 * @returns A React node showing the color swatch with optional string representations.
 */
export const ColorSwatch = ({
  color,
  label,
  displayHex = true,
  displayOklch = true,
  displayHsl = true,
}: ColorSwatchProps) => {
  const config = useKitterConfig().styles?.color?.colorSwatch ?? {};

  const ref = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState('');
  const [oklchString, setOklchString] = useState('');
  const [hslString, setHslString] = useState('');

  useEffect(() => {
    if (!ref.current) return;

    const style = getComputedStyle(ref.current);
    const rgb = style.backgroundColor;
    const parsed = parse(rgb);
    if (!parsed) return;

    if (displayHex) {
      setHex(formatHex(parsed));
    }

    if (displayOklch) {
      const oklch = oklchConverter(parsed);
      if (oklch) {
        const l = +(oklch.l * 100).toFixed(2);
        const c = +oklch.c.toFixed(4);
        const h = oklch.h !== undefined ? +oklch.h.toFixed(2) : 0;
        setOklchString(`oklch(${l}% ${c} ${h}deg)`);
      }
    }

    if (displayHsl) {
      const hsl = hslConverter(parsed);
      if (hsl) {
        const h = +(hsl.h ?? 0).toFixed(0);
        const s = +(hsl.s * 100).toFixed(0);
        const l = +(hsl.l * 100).toFixed(0);
        setHslString(`hsl(${h} ${s}% ${l}%)`);
      }
    }
  }, [displayHex, displayOklch, displayHsl]);

  return (
    <div className="flex flex-row gap-4 items-center">
      <div
        ref={ref}
        className={`${config.size} ${color} ${config.radius} ${config.shadow}`}
      />
      <div className="flex flex-col">
        <span className={config.labelStyle}>{label}</span>
        {displayHex && <span className={config.colorCodeStyle}>{hex}</span>}
        {displayOklch && (
          <span className={config.colorCodeStyle}>{oklchString}</span>
        )}
        {displayHsl && (
          <span className={config.colorCodeStyle}>{hslString}</span>
        )}
      </div>
    </div>
  );
};
