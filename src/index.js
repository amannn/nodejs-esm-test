// This is native ESM due to `type: 'module'`

// ✅ Interop with CJS works
import traverson from 'traverson';

// Internal files need an explicit file extension.
// See https://nodejs.org/api/esm.html#mandatory-file-extensions
// We can avoid this by using a bundler though.
import another from './another';

console.log({traverson, another});
