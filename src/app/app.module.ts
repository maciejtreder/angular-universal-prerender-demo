import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular-universal-prerender-demo'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
