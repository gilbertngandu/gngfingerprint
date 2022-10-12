var capacitorUsbFingerprint = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
