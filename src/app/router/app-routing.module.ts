import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { LoginFailedPageComponent } from '../pages/login-failed-page/login-failed-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomePageComponent } from '../pages/home-page';
import { MovieLandPageComponent } from '../pages/movie-land-page/movie-land-page.component';
import { MovieGenreDetailPageComponent } from '../pages/movie-genre-detail-page/movie-genre-detail-page.component';
import { AccountConfirmPageComponent } from '../pages/account-confirm-page/account-confirm-page.component';
import { AccountInfoLoadingPageComponent } from '../pages/account-info-loading-page/account-info-loading-page.component';
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
        component: AccountConfirmPageComponent
    },
    {
        path: 'main',
        component: MainPageComponent,
        canActivate:[AuthGuard],
        children: [
            {
                path:'home',
                component: HomePageComponent
            },
            {
                path:'tvland',
                component: MovieLandPageComponent
            },
            {
                path:'movieland',
                component: MovieLandPageComponent
            },
            {
                path:'movie-genre-detail/:genre_id', 
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
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(baseRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
