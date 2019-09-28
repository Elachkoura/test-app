import { NgModule } from '@angular/core';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ShortUrlPageComponent } from '../pages/short-url-page/short-url-page.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'short-url',
    component: ShortUrlPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
