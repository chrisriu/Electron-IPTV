import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResizeDiv } from './resize-div/resize-div';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@NgModule({
    declarations: [
        ResizeDiv,
        SidebarMenuComponent,
        
    ],
    imports: [
        BrowserModule, 
        FormsModule,
    ],
    exports: [
        ResizeDiv,
        SidebarMenuComponent
    ],
})
export class ComponentsModule { }
