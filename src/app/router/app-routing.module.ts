import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomePageComponent } from '../pages/home-page';
import { MovieLandPageComponent } from '../pages/movie-land-page/movie-land-page.component';
import { MovieGenreDetailPageComponent } from '../pages/movie-genre-detail-page/movie-genre-detail-page.component';

const baseRoutes: Routes = [
    {
        path: '',
        redirectTo:'main/home',
        canActivate: [AuthGuard],
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainPageComponent,
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
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(baseRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
