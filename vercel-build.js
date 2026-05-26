import { execSync } from 'child_process';
import fs from 'fs';

console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('Formatting output for Vercel Build Output API v3...');
fs.mkdirSync('.vercel/output/static', { recursive: true });
fs.cpSync('dist/client', '.vercel/output/static', { recursive: true });

// Rename _shell.html to index.html so Vercel recognizes it as the entry point
if (fs.existsSync('.vercel/output/static/_shell.html')) {
  fs.renameSync('.vercel/output/static/_shell.html', '.vercel/output/static/index.html');
}

// Generate the Vercel routing configuration to handle SPA fallbacks perfectly
fs.writeFileSync('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index.html" }
  ]
}, null, 2));

console.log('Vercel build output successfully generated in .vercel/output!');
