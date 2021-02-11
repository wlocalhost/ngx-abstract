import {Component} from '@angular/core';
import {AbsComponent} from '../common/abs-component';

@Component({
  selector: 'abs-abstract',
  template: `
    <p>I'm a simple component extended by AbsComponent.</p>
  `,
  styles: []
})
export class AbstractComponent extends AbsComponent {
}
