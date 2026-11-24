const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = path.join(__dirname, 'entry.png');
const dest = path.join(outDir, 'entry.png');

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log(`${dest} ${fs.statSync(dest).size} bytes`);
