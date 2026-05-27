import fs from 'fs';
import path from 'path';

console.log('Restructuring output directory for Vercel default settings...');

const clientDir = path.join(process.cwd(), 'dist', 'client');
const distDir = path.join(process.cwd(), 'dist');

if (fs.existsSync(clientDir)) {
  const files = fs.readdirSync(clientDir);
  for (const file of files) {
    fs.renameSync(path.join(clientDir, file), path.join(distDir, file));
  }
  fs.rmSync(clientDir, { recursive: true, force: true });
}

// Rename _shell.html to index.html for standard SPA hosting
const shellPath = path.join(distDir, '_shell.html');
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(shellPath)) {
  fs.renameSync(shellPath, indexPath);
  console.log('Successfully renamed _shell.html to index.html');
} else {
  console.log('_shell.html not found, skipping rename.');
}

console.log('Output restructured successfully for Vercel!');
