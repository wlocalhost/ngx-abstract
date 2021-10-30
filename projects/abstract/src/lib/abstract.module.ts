import {Injector, ModuleWithProviders, NgModule} from '@angular/core';

import {ABS_PAGE_CONFIG, IAbsPageConfig} from '../common/tokens';

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
 * Default NgxAbstract configuration
 */
export interface INgxAbstractConfig {
  /**
   * Add a prefix to page title
   * @example
   * NgxAbstractModule.withConfig({
   *   page: {
   *     prefix: '{title} | My super brand'
   *   }
   * })
   */
  page?: IAbsPageConfig;
}

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

  static withConfig(config: INgxAbstractConfig): ModuleWithProviders<NgxAbstractModule> {
    return {
      ngModule: NgxAbstractModule,
      providers: [
        {provide: ABS_PAGE_CONFIG, useValue: config.page || {}}
      ]
    };
  }
}
