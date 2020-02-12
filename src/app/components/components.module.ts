import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResizeDiv } from './resize-div/resize-div';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MultiMovieSliderComponent } from './multi-movie-slider/multi-movie-slider.component';
import { MultiTvChannelSliderComponent } from './multi-tv-channel-slider/multi-tv-channel-slider.component';
import { MultiSeriesSliderComponent } from './multi-series-slider/multi-series-slider.component';
import { MultiRadioSliderComponent } from './multi-radio-slider/multi-radio-slider.component';
import { AccountPartComponent } from './account-part/account-part.component';

@NgModule({
    declarations: [
        ResizeDiv,
        SidebarMenuComponent,
        MultiMovieSliderComponent,
        MultiTvChannelSliderComponent,
        MultiSeriesSliderComponent,
        MultiRadioSliderComponent,
        AccountPartComponent,
        
    ],
    imports: [
        BrowserModule, 
        FormsModule,
    ],
    exports: [
        ResizeDiv,
        SidebarMenuComponent,
        MultiMovieSliderComponent,
        MultiTvChannelSliderComponent,
        MultiSeriesSliderComponent,
        MultiRadioSliderComponent,
        AccountPartComponent,
    ],
})
export class ComponentsModule { }
