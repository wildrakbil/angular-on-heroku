import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login.component';

const appLogin: Routes = [
    {
      path: "",
      component: LoginComponent,
      children: [
        { path: "login", component: LoginComponent }
      ],
    },
  ];
  export const LOGIN_ROUTES = RouterModule.forChild(appLogin);