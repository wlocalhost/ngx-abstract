import {Directive, ElementRef, TemplateRef} from '@angular/core';
import {AbsSimpleClass} from './abs-simple-class';

/**
 * Simple abstract directive with common properties.
 * @example
 * ```ts
 * export class MyDirective extends AbsDirective {}
 * ```
 */
@Directive()
export abstract class AbsDirective<T = HTMLElement> extends AbsSimpleClass {
  constructor(
    private elementRef: ElementRef,
    readonly templateRef: TemplateRef<any>
  ) {
    super();
  }

  get el(): T {
    return this.elementRef.nativeElement;
  }
}
