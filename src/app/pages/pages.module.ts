import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PagesComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
  ],
  exports: [
    HeaderComponent
  ]
})
export class PagesModule {}
