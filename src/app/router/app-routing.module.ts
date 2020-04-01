import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../pages/auth/login-page/login-page.component';
import { LoginFailedPageComponent } from '../pages/auth/login-failed-page/login-failed-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomePageComponent } from '../pages/home-page';
import { MovieLandPageComponent } from '../pages/movie-land-page/movie-land-page.component';
import { MovieGenreDetailPageComponent } from '../pages/movie-genre-detail-page/movie-genre-detail-page.component';
import { AccountConfirmPageComponent } from '../pages/auth/account-confirm-page/account-confirm-page.component';
import { ConfirmLogoutPageComponent } from '../pages/confirm-logout-page/confirm-logout-page.component';
import { AccountInfoLoadingPageComponent } from '../pages/auth/account-info-loading-page/account-info-loading-page.component';
const baseRoutes: Routes = [
  {
    path: '',
    redirectTo: 'account-confirm-page',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'account-info-loading',
    component: AccountInfoLoadingPageComponent,
  },
  {
    path: 'account-confirm-page',
    canActivate: [AuthGuard],
    component: AccountConfirmPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'livetv',
        component: MovieLandPageComponent
      },
      {
        path: 'vod',
        component: MovieLandPageComponent
      },
      {
        path: 'series',
        component: MovieLandPageComponent
      },
      {
        path: 'movie-genre-detail/:genre_id',
        component: MovieGenreDetailPageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'login-failed',
    component: LoginFailedPageComponent
  },
  {
    path: 'confirm-logout',
    component: ConfirmLogoutPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(baseRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
