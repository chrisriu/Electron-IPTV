import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieLandPageComponent } from './movie-land-page/movie-land-page.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TvchannelLandPageComponent } from './tvchannel-land-page/tvchannel-land-page.component';
import { TvseriesLandPageComponent } from './tvseries-land-page/tvseries-land-page.component';
import { RadioLandPageComponent } from './radio-land-page/radio-land-page.component';
import { RecordingLandPageComponent } from './recording-land-page/recording-land-page.component';
import { FavoriteLandPageComponent } from './favorite-land-page/favorite-land-page.component';
import { MovieGenreDetailPageComponent } from './movie-genre-detail-page/movie-genre-detail-page.component';
@NgModule({
    declarations: [
        LoginPageComponent,
        MainPageComponent,
        SidebarMenuComponent,
        HomePageComponent,
        MovieLandPageComponent,
        TvchannelLandPageComponent,
        TvseriesLandPageComponent,
        RadioLandPageComponent,
        RecordingLandPageComponent,
        FavoriteLandPageComponent,
        MovieGenreDetailPageComponent
    ],

    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],

    exports: [
        LoginPageComponent,
        MainPageComponent,
        SidebarMenuComponent,
        HomePageComponent,
        MovieLandPageComponent
    ],
})
export class PagesModule { }
