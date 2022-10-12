export interface UsbFingerprintPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
