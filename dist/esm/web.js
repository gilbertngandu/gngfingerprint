import { WebPlugin } from '@capacitor/core';
export class UsbFingerprintWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map