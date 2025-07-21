import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const targetPath = resolve(process.cwd(), 'kitter.config.ts');
const templatePath = resolve(
  __dirname,
  '../templates/kitter.config.template.ts',
);

if (!existsSync(targetPath)) {
  const content = readFileSync(templatePath, 'utf-8');
  writeFileSync(targetPath, content, { encoding: 'utf-8' });
  console.log('✅ kitter.config.ts created');
} else {
  console.log('ℹ️ kitter.config.ts already exists, skipping');
}
