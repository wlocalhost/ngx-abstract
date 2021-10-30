import {Component} from '@angular/core';
import {AbsPage} from '@wanoo21/ngx-abstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AbsPage {
  constructor() {
    super('My super title', 'My Super Description');
  }

  changeTitle(): void {
  }
}
