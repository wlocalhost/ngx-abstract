import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbsPage} from '@wanoo21/ngx-abstract';
import {NgxAbsDialog} from '@wanoo21/ngx-abstract/dialog';

import {DialogTestComponent} from './dialog-test/dialog-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends AbsPage {
  constructor(readonly ngxAbsDialog: NgxAbsDialog) {
    super('My super title', 'My Super Description');
  }

  openDialog(): void {
    this.ngxAbsDialog.open(DialogTestComponent,
      {data: {foo: 'bar'}, backdropClickClose: false}
    ).afterClosed().subscribe(value => {
      console.log(value);
    });
  }
}
