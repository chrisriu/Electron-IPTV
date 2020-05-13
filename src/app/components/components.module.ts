import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResizeDiv } from './resize-div/resize-div';


import { AccountPartComponent } from './account-part/account-part.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LastAddedMoviesComponent } from './last-added-movies/last-added-movies.component';
import { FavoriteRadioChannelComponent } from './favorite-radio-channel/favorite-radio-channel.component';
import { FavoriteLiveTVsComponent } from './favorite-live-tvs/favorite-live-tvs.component';
import { LastAddedTVSeriesComponent } from './last-added-tvseries/last-added-tvseries.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardRowFragmentComponent } from './card-row-fragment/card-row-fragment.component';
import { MovieCardBlockComponent } from './movie-card-block/movie-card-block.component';
@NgModule({
  declarations: [
    ResizeDiv,
    AccountPartComponent,
    LastAddedMoviesComponent,
    FavoriteRadioChannelComponent,
    FavoriteLiveTVsComponent,
    LastAddedTVSeriesComponent,
    SearchBoxComponent,

    CardRowFragmentComponent,

    MovieCardBlockComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularResizedEventModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  exports: [
    ResizeDiv,
    AccountPartComponent,
    LastAddedMoviesComponent,
    FavoriteRadioChannelComponent,
    FavoriteLiveTVsComponent,
    LastAddedTVSeriesComponent,
    SearchBoxComponent,
    CardRowFragmentComponent
  ],
})
export class ComponentsModule {

}
