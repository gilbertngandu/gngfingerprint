import { WebPlugin } from '@capacitor/core';
import type { UsbFingerprintPlugin } from './definitions';
export declare class UsbFingerprintWeb extends WebPlugin implements UsbFingerprintPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
