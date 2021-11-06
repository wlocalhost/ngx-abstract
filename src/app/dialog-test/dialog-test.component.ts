import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {NGX_ABS_DIALOG_DATA} from '@wanoo21/ngx-abstract/dialog';

@Component({
  selector: 'app-dialog-test',
  template: `
    <p>Works, data: {{data | json}}</p>
    <button type="button" absDialogClose>Close dialog</button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: white;
        padding: 1rem;
        border-radius: 3px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogTestComponent implements OnInit {

  constructor(@Inject(NGX_ABS_DIALOG_DATA) readonly data: { foo: string }) {
  }

  ngOnInit(): void {
  }

}
