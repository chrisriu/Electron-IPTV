import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ResizeDiv } from './resize-div/resize-div';

import { LargeCardSliderComponent } from './large-card-slider/large-card-slider.component';
import { SmallCardSliderComponent } from './small-card-slider/small-card-slider.component';
import { AccountPartComponent } from './account-part/account-part.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgProgressModule } from 'ngx-progressbar';
@NgModule({
    declarations: [
        ResizeDiv,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule, 
        FormsModule,
        AngularResizedEventModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        ResizeDiv,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
    ],
})
export class ComponentsModule { }
