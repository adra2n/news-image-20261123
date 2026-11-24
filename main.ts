import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

console.log(`${destination} ${statSync(destination).size} bytes`);
