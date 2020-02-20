import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { ResizeDiv } from './resize-div/resize-div';

import { LargeCardSliderComponent } from './large-card-slider/large-card-slider.component';
import { SmallCardSliderComponent } from './small-card-slider/small-card-slider.component';
import { AccountPartComponent } from './account-part/account-part.component';
import { AngularResizedEventModule } from 'angular-resize-event';
@NgModule({
    declarations: [
        ResizeDiv,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        AngularResizedEventModule,
    ],
    exports: [
        ResizeDiv,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
    ],
})
export class ComponentsModule { }
