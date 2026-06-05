#!/usr/bin/env node
// Test 2 — makeExcerpt no longer leaks "[Image: ...]" alt-text.
// (makeExcerpt intentionally keeps title TEXT; it only strips the markdown.
//  The fix under test is solely the removal of the [Image: ...] block.)
import { makeExcerpt } from './lib/word-count.mjs';

const body = [
  '# AI For Private Equity — The Future Of B2B Distribution',
  '',
  '*[Image: AI is transforming B2B distribution making it a playground for VC and PE]*',
  '',
  "Online B2B distribution? Amazon's foray into B2B distribution worked fine for simple products.",
].join('\n');

const out = makeExcerpt(body, 240);
let n = 0;
function ok(cond, msg) {
  n++;
  if (!cond) { console.error(`FAIL: ${msg}\n  got: ${JSON.stringify(out)}`); process.exit(1); }
}

ok(!out.includes('[Image'), 'no "[Image" marker survives');
ok(!out.includes('playground for VC and PE'), 'image alt-text inner phrase is gone');
ok(out.includes('Online B2B distribution?'), 'real body sentence survives');

console.log(`ALL PASS (${n} assertions)`);
