import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    ]
  })
  export class LoginModule {}
  