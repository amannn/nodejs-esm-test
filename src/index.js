// This is native ESM due to `type: 'module'`

// ✅ Interop with CJS works
import traverson from 'traverson';

// Internal files need an explicit file extension
// See https://nodejs.org/api/esm.html#mandatory-file-extensions
import another from './another.js';

console.log({traverson, another});
