import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResizeDiv } from './resize-div/resize-div';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { LargeCardSliderComponent } from './large-card-slider/large-card-slider.component';
import { SmallCardSliderComponent } from './small-card-slider/small-card-slider.component';
import { AccountPartComponent } from './account-part/account-part.component';
import { AngularResizedEventModule } from 'angular-resize-event';


@NgModule({
    declarations: [
        ResizeDiv,
        SidebarMenuComponent,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
        
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        AngularResizedEventModule
    ],
    exports: [
        ResizeDiv,
        SidebarMenuComponent,
        AccountPartComponent,
        LargeCardSliderComponent,
        SmallCardSliderComponent,
    ],
})
export class ComponentsModule { }
