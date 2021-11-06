import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxAbstractModule} from '@wanoo21/ngx-abstract';
import {NgxAbstractDialogModule} from '@wanoo21/ngx-abstract/dialog';

import {AppComponent} from './app.component';
import {SimpleDirective} from './simple.directive';
import { DialogTestComponent } from './dialog-test/dialog-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    DialogTestComponent
  ],
  imports: [
    BrowserModule,
    NgxAbstractDialogModule,
    NgxAbstractModule.withConfig({
      page: {
        prefix: '{title} >>>> sasa'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
