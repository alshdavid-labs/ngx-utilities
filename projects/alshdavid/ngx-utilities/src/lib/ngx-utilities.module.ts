import { NgModule, Injector } from '@angular/core';

export let AppInjector: Injector;

export function setAppInjector(injector: Injector) {
    if (AppInjector) {
        console.error('Programming error: AppInjector was already set');
    }
    else {
        AppInjector = injector;
    }
}

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxUtilitiesModule {
  constructor(
    injector: Injector
  ) {
      setAppInjector(injector);
  }
}
