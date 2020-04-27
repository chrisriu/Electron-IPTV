import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services';
@Component({
  selector: 'app-account-part',
  templateUrl: './account-part.component.html',
  styleUrls: ['./account-part.component.css']
})
export class AccountPartComponent implements OnInit {
  sliderTitlePosX: number;
  subscription: any;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.subscription = this.shareService.getEmittedPosX().subscribe((sidebarPosX) => {
      this.sliderTitlePosX = sidebarPosX + 10
    })
  }
}
