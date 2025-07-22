import { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const userProjectRoot = process.env.INIT_CWD ?? process.cwd();
const targetPath = resolve(userProjectRoot, 'kitter.config.ts');

const defaultConfigString = `import type { KitterConfig } from 'kitter';

export const kitter: KitterConfig = {
  styles: {
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
      className: '',
    },
    pageDescription: {
      className: '',
    },
    pageSection: {
      titleClassName: '',
    },
    documentContents: {
      className: '',
    },
  },
};
`;

if (!existsSync(targetPath)) {
  writeFileSync(targetPath, defaultConfigString, { encoding: 'utf-8' });
  console.log('✅ kitter.config.ts created');
} else {
  console.log('ℹ️ kitter.config.ts already exists, skipping');
}
