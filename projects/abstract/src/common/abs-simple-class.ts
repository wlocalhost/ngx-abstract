import {Directive, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

/**
 * Simple class which contains simple & common methods
 * @internal
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
