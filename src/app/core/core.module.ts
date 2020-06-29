import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ControlSearchCommunicationService } from './communication/control-search-communication.service';
import { throwIfAlreadyLoaded } from './module-import-guard';


const SERVICE_COMMUNICATION = [ControlSearchCommunicationService];

@NgModule({
  providers: [...SERVICE_COMMUNICATION],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
