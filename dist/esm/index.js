import { registerPlugin } from '@capacitor/core';
const UsbFingerprint = registerPlugin('UsbFingerprint', {
    web: () => import('./web').then(m => new m.UsbFingerprintWeb()),
});
export * from './definitions';
export { UsbFingerprint };
//# sourceMappingURL=index.js.map