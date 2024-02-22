import traverson from 'traverson';

var another = 'another.js';

// This is native ESM due to `type: 'module'`
// ✅ Interop with CJS works
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function fetch(url) {
    return _fetch.apply(this, arguments);
}
function _fetch() {
    _fetch = _async_to_generator(function*(url) {
        const got = (yield import('got')).default;
        console.log(got);
    });
    return _fetch.apply(this, arguments);
}
console.log({
    traverson,
    another
});

export { fetch as default };
