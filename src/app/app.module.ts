import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxAbstractModule} from '@wanoo21/ngx-abstract';

import {AppComponent} from './app.component';
import {SimpleDirective} from './simple.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective
  ],
  imports: [
    BrowserModule,
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
