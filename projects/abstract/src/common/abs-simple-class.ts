import {Subject, Subscription} from 'rxjs';
import {Directive, OnDestroy} from '@angular/core';

/**
 * Simple class which contains simple & common methods
 */
@Directive()
export class AbsSimpleClass implements OnDestroy {
  destroyed$ = new Subject<void>();
  subscription = new Subscription();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.subscription.unsubscribe();
  }
}
