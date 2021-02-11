import {Directive} from '@angular/core';
import {AbsDirective} from '@wanoo21/ngx-abstract';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective extends AbsDirective {
}
