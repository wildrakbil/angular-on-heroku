import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent }
      ],
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(appRoutes);