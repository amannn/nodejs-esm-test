import traverson from 'traverson';

var another = 'another.js';

// This is native ESM due to `type: 'module'`
// ✅ Interop with CJS works
console.log({
    traverson,
    another
});
