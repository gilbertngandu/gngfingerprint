'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const UsbFingerprint = core.registerPlugin('UsbFingerprint', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.UsbFingerprintWeb()),
});

class UsbFingerprintWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UsbFingerprintWeb: UsbFingerprintWeb
});

exports.UsbFingerprint = UsbFingerprint;
//# sourceMappingURL=plugin.cjs.js.map
