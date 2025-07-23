// BE SURE TO COPY CHANGES HERE TO THE POSTINSTALL FILE

import type { KitterConfig } from './kitter.config';

export const kitter: KitterConfig = {
  styles: {
    documentation: {
      documentation: {
        maxWidth: '1000px',
        className: '',
      },
      scrollToTop: {
        textClassName: 'font-mono',
        iconClassName: '',
        iconColor: 'black',
        textOverride: 'table of contents',
      },
      page: {
        className: '',
      },
      pageTitle: {
        className: 'text-4xl font-light mb-12 pt-20 font-mono',
      },
      pageDescription: {
        className:
          'text-left text-md font-light mb-20 flex flex-col gap-8 font-mono',
      },
      pageSection: {
        titleClassName: 'text-2xl font-light font-mono text-left w-full',
      },
      documentContents: {
        className:
          'font-mono underline decoration-dotted grid grid-cols-4 gap-8 mt-8',
      },
    },
    color: {
      colorSwatch: {
        size: 'w-16 h-16',
        radius: 'rounded-sm',
        shadow: 'shadow-sm',
        labelStyle: 'font-mono text-md',
        colorCodeStyle: 'text-xs font-mono text-gray-500',
      },
    },
    typography: {
      typographyGroup:
        'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-20 gap-12',
      sampleTitle: 'flex flex-col text-xs text-gray-700 font-mono',
      sampleComputedStyles: 'flex flex-col text-xs text-gray-400 font-mono',
    },
  },
};
