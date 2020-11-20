import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';

import { PAGES_ROUTES } from './pages/pages.rutes';
import { LOGIN_ROUTES } from './login/login.rutes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PagesModule,
    PAGES_ROUTES,
    LOGIN_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
