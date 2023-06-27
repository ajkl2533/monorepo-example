import designTokens from '../src/design-tokens.js';
import { strict as assert } from 'assert';

assert.strictEqual(designTokens(), 'Hello from designTokens');
console.info('designTokens tests passed');
