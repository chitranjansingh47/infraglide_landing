import fs from 'fs';
import path from 'path';

const clientDir = path.join(process.cwd(), 'dist', 'client');
const distDir = path.join(process.cwd(), 'dist');

console.log('Restructuring output for Vercel static SPA...');

if (!fs.existsSync(clientDir)) {
  console.log('No dist/client directory found — skipping restructure.');
  process.exit(0);
}

// Copy everything from dist/client into dist/ (overwrite)
fs.cpSync(clientDir, distDir, { recursive: true, force: true });
console.log('Copied dist/client/* → dist/');

// Remove the now-redundant dist/client folder
fs.rmSync(clientDir, { recursive: true, force: true });
console.log('Removed dist/client/');

// Rename _shell.html → index.html
const shellPath = path.join(distDir, '_shell.html');
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(shellPath)) {
  if (fs.existsSync(indexPath)) fs.rmSync(indexPath);
  fs.renameSync(shellPath, indexPath);
  console.log('Renamed _shell.html → index.html');
} else if (fs.existsSync(indexPath)) {
  console.log('index.html already exists — nothing to rename.');
} else {
  console.error('ERROR: Neither _shell.html nor index.html found in dist/!');
  process.exit(1);
}

console.log('\n✅ dist/ is ready for Vercel static deployment!');
console.log('Files in dist/:');
fs.readdirSync(distDir).forEach(f => console.log(' -', f));
