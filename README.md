# NGX Abstract

A collection of **Angular abstract classes** which extends simple classes with common methods. 

Example:

```ts
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export class MyClass extends AbsComponent {
  mySubject$ = new Subject();
  subsription$ = this.mySubject$.pipe(takeUntil(this.destroyed$)) // Where `this.destroyed$` is part of `AbsComponent`
}
```

More examples and docs are coming.
