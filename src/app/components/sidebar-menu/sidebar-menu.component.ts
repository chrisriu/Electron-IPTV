import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

    
    constructor() { }

    ngOnInit(): void {
        var sidebar = document.getElementById("sidebar");
        
    }

}
