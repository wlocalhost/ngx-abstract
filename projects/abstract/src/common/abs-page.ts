import {Directive} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import {NgxAppInjector} from '../lib/abstract.module';
import {AbsComponent} from './abs-component';

/**
 * An abstract class with page title and description.
 * @example
 * class MyPage extends AbsPage {
 *   constructor() {
 *     super('My awesome title', 'My super description')
 *   }
 * }
 */
@Directive()
export abstract class AbsPage extends AbsComponent {
  /**
   * Add, Remove or change page Meta tags
   */
  readonly meta: Meta = NgxAppInjector.get(Meta);
  /**
   * @internal
   */
  private readonly title: Title = NgxAppInjector.get(Title);

  constructor(title: string, description: string) {
    super();
    this.setTitle(title);
    this.setDescription(description);
  }

  /**
   * Change page title dynamically
   */
  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  /**
   * Change page description dynamically
   */
  setDescription(description: string): void {
    this.meta.addTag({name: 'description', content: description});
  }
}
