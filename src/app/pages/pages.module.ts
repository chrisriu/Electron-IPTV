import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module'
@NgModule({
    declarations: [
        LoginPageComponent,
        HomePageComponent
    ],

    imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],

    exports: [
        LoginPageComponent,
        HomePageComponent
    ],
})
export class PagesModule { }
