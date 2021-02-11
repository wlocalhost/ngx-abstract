import {Directive, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {AbsSimpleClass} from 'projects/abstract/src/common/abs-simple-class';

/**
 *
 */
@Directive()
export abstract class AbsComponent extends AbsSimpleClass {
}
