import {Component} from '@angular/core';
import {AbsComponent} from '@wanoo21/ngx-abstract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AbsComponent {
  title = 'ngx-abstract';
}
