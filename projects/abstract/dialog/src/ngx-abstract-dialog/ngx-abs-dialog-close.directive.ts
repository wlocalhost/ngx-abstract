import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {NgxAbsDialogRef} from './NgxAbsDialogRef';

@Directive({
  selector: '[absDialogClose]',
  exportAs: 'absDialogClose'
})
export class NgxAbsDialogCloseDirective implements OnInit {
  @Input() absDialogClose: any;

  constructor(private ngxAbsDialogRef: NgxAbsDialogRef<any>) {
  }

  @HostListener('click') close(): void {
    this.ngxAbsDialogRef.close(this.absDialogClose);
  }

  @HostListener('document:keydown.escape') escClose(): void {
    this.close();
  }

  ngOnInit(): void {
  }

}
