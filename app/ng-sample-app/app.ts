import AppStation from "appstation";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import SampleAppModule from './module';

export class SampleApp extends AppStation.App {

    private onWidgetCallback: () => void;
    private onFullScreenCallback: () => void;
    private sampleAppModule: typeof SampleAppModule;

    constructor(sampleAppModule: typeof SampleAppModule) {
        super("sample-app", "Sample App", "My pretty sample app", true, 3, 2);
        this.sampleAppModule = sampleAppModule;
    }

    protected getInnerHTML(): string {
        return `<sample-app>Loading sample-app content here ...</sample-app>`;
    }

    public onWidgetCreated(): void {
        platformBrowserDynamic().bootstrapModule(this.sampleAppModule);
    }

    public onWidget(): void {
        if(this.onWidgetCallback!= null){
            this.onWidgetCallback();
        }
    }

    public onFullScreen(): void{
        if(this.onFullScreenCallback != null){
            this.onFullScreenCallback();
        }
    }

    public setOnWidgetCallback(onWidgetCallback: () => void): void{
        this.onWidgetCallback = onWidgetCallback;
    }

    public setOnFullscreenCallback(onFullScreenCallback: () => void): void{
        this.onFullScreenCallback = onFullScreenCallback;
    }
}

const sampleAppInstance: SampleApp = new SampleApp(SampleAppModule);

export default sampleAppInstance;