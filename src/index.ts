import { registerPlugin } from '@capacitor/core';

import type { UsbFingerprintPlugin } from './definitions';

const UsbFingerprint = registerPlugin<UsbFingerprintPlugin>('UsbFingerprint', {
  web: () => import('./web').then(m => new m.UsbFingerprintWeb()),
});

export * from './definitions';
export { UsbFingerprint };
