import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { PAGES_ROUTES } from './pages/pages.rutes';
import { LOGIN_ROUTES } from './login/login.rutes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
