import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'src/routes/index.tsx');
let content = fs.readFileSync(file, 'utf8');

// Replace specific hardcoded colors with CSS variables
content = content.replace(/bg-\[#1a0b2e\]\/30/g, 'bg-[var(--ig-card)]');
content = content.replace(/border-\[#8A53D6\]\/10/g, 'border-[var(--ig-border-soft)]');
content = content.replace(/border-\[#8A53D6\]\/50/g, 'border-[var(--ig-border)]');
content = content.replace(/hover:shadow-\[0_0_30px_rgba\(138,83,214,0\.15\)\]/g, 'hover:ig-glow');

content = content.replace(/text-\[#b0b0b0\]/g, 'text-[var(--ig-muted)]');
content = content.replace(/text-\[#b07eff\]/g, 'text-[var(--ig-accent-2)]');
content = content.replace(/text-\[#5a3a8a\]/g, 'text-[var(--ig-dim)]');
content = content.replace(/text-\[#8A53D6\]/g, 'text-[var(--ig-accent)]');

content = content.replace(/bg-\[rgba\(138,83,214,0\.1\)\]/g, 'bg-[var(--ig-border-soft)]');
content = content.replace(/bg-\[rgba\(138,83,214,0\.08\)\]/g, 'bg-[var(--ig-border-soft)]');

// Also replace the rgba(0,0,0,.5) if any are left
content = content.replace(/rgba\(0,0,0,\.5\)/g, 'var(--ig-card)');

// Replace all text-white globally, as we want text-[var(--ig-text)] everywhere
content = content.replace(/text-white/g, 'text-[var(--ig-text)]');

// The DemoStepper uses text-white internally, but replacing it might be fine or we can just leave it since the user said it looks fine?
// Actually, DemoStepper is in src/components/DemoStepper.tsx, so this script won't touch it.

fs.writeFileSync(file, content);
console.log('Fixed hardcoded colors in index.tsx');
