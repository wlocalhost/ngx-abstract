import {Directive, ElementRef, TemplateRef} from '@angular/core';
import {AbsSimpleClass} from './abs-simple-class';

/**
 *
 */
@Directive()
export abstract class AbsDirective<T = HTMLElement> extends AbsSimpleClass {
  constructor(
    private elementRef: ElementRef,
    public templateRef: TemplateRef<any>
  ) {
    super();
  }

  get el(): T {
    return this.elementRef.nativeElement;
  }
}
