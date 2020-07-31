import { ProgressBarModule } from 'angular-progress-bar';
import { AngularResizedEventModule } from 'angular-resize-event';
import { NgProgressModule } from 'ngx-progressbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerPageComponent } from './player-page/player-page.component';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { LivevjsPlayerComponent } from './livevjs-player/livevjs-player.component';

@NgModule({
  declarations: [
    PlayerPageComponent,
    VjsPlayerComponent,
    LivevjsPlayerComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AngularResizedEventModule,
    ProgressBarModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgProgressModule,
    FontAwesomeModule,
    NgxSpinnerModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ],
  exports: [
    PlayerPageComponent,
    VjsPlayerComponent,
    LivevjsPlayerComponent,
  ],
})
export class PlayerModule {
}
