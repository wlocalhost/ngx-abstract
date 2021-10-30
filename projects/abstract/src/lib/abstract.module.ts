import {Injector, NgModule} from '@angular/core';

/**
 * Application injector.
 * Get application providers straight to component's body, without injecting into class' constructor.
 * @example
 * class MyClass {
 *   myService: MyService = NgxAppInjector.get(MyService)
 * }
 */
export let NgxAppInjector: Injector;

/**
 * NgxAbstractModule required to be imported
 */
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxAbstractModule {
  constructor(injector: Injector) {
    NgxAppInjector = injector;
  }
}
