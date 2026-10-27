// Surse confirmate. Rulare: node tests/surse.test.mjs (static)
import fs from 'node:fs'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)); const h = fs.readFileSync(path.join(HERE, '..', 'index.html'), 'utf8');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const n = r => (h.match(r) || []).length;
t('DOI Jain & Mills în 8 limbi (+ro)', n(/10\.1007\/s12529-009-9062-4/g) >= 8);
t('sursa MSK BioResonance în 8 limbi (+ro)', n(/mskcc\.org\/cancer-care\/integrative-medicine\/herbs\/bioresonance-therapy \(page updated 25 Feb 2021/g) >= 8);
t('„sursă de completat" pentru inforenergetică păstrat', /Inforenergetică \/ inforenergetică[^<]*sursă de completat/.test(h));
t('versiune 2.0.2', JSON.parse(fs.readFileSync(path.join(HERE, '..', 'app.json'), 'utf8')).version === '2.0.2');
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
