import EventEmitter from 'events';
import util from 'util';

interface AuthConfig {
    keyFilePath: string;
    savedTokensPath: string;
    tokenInput?(processTokens: any): void;
    oauth2Client?: any;
};

interface AudioConfig {
    encodingOut?: "LINEAR16" | "MP3" | "OPUS_IN_OGG";
    sampleRateOut?: number;
    encodingIn?: "LINEAR16" | "FLAC";
    sampleRateIn?: number;
};

// rewrite proper class in file
class Assistant {
    constructor(a: any) {}
}

export default class GoogleAssistant extends EventEmitter {

    private assistant: Assistant;

    constructor(private readonly authConfig: AuthConfig) {
        super();
        this.start();
    }

    private start(): void {
        if (!this.authConfig) throw new Error('Missing auth config object!');

        if (this.authConfig.oauth2Client) {
            this.assistant = new Assistant(this.authConfig.oauth2Client);
            this.checkAssistant();
        } else {
            // TODO: auth
        }
    }

    private checkAssistant(): void {
        if (this.assistant) {
            this.emit('ready', this.assistant);
        }
    }
}
