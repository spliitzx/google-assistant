// Type definitions for google-assistant v0.5.3

export interface AuthConfig {
    keyFilePath: string;
    savedTokensPath: string;
    tokenInput?(processTokens: any): void;
};

export interface AudioConfig {
    encodingOut?: "LINEAR16" | "MP3" | "OPUS_IN_OGG";
    sampleRateOut?: number;
    encodingIn?: "LINEAR16" | "FLAC";
    sampleRateIn?: number;
};

export interface ConversationConfig {
    audio?: AudioConfig;
    textQuery?: string;
    deviceId?: string;
    deviceModelId?: string;
    lang?: string;
    isNew?: boolean;
    deviceLocation?: DeviceLocation;
    screen?: ScreenConfig;
};

export interface DeviceLocation {
    coordinates: { latitude: number; longitude: number };
};

export type ScreenConfig = { isOn: boolean };

export declare class EventEmitter {
    public emit(type: string, payload?: any): any;
    public on(type: string, handler: Function): any;
}

export declare class Conversation extends EventEmitter {
    constructor(config: ConversationConfig);
    public write(bytes: Uint8Array): void;
    public end(): void;
}

export declare class Assistant {}

export declare class GoogleAssistant extends EventEmitter {
    constructor(
        authConfig: AuthConfig,
        callback?: (callbackArg: Assistant | Error) => void
    );

    public start(
        conversation?: ConversationConfig,
        callback?: (callbackArg: Conversation | Error) => void
    ): void;
}
