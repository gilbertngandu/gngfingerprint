import { WebPlugin } from '@capacitor/core';

import type { UsbFingerprintPlugin } from './definitions';

export class UsbFingerprintWeb extends WebPlugin implements UsbFingerprintPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
