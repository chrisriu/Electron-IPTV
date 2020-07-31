import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ShareService } from 'src/app/services';
@Component({
  selector: 'app-livetv-category-page',
  templateUrl: './livetv-category-page.component.html',
  styleUrls: ['./livetv-category-page.component.css']
})
export class LivetvCategoryPageComponent implements OnInit {
  streamURL: any;
  livetv_category_id: number;
  constructor(private activatedRoute: ActivatedRoute, private shareService: ShareService) { }

  ngOnInit(): void {

    const currentUser = this.shareService.currentUser;
    const username = currentUser["username"]
    const password = currentUser["password"]
    this.livetv_category_id = this.activatedRoute.snapshot.params.category_id
    console.log(this.livetv_category_id)
    const totalLiveTvs = this.shareService.livetvs;
    console.log("Total Service", totalLiveTvs);

    let livetv_categories: any = [];

    for(var i = 0; i<totalLiveTvs.length; i++){
      if(totalLiveTvs[i].category_id == this.livetv_category_id){
        livetv_categories.push(totalLiveTvs[i])
      }
    }

    console.log("Categories same =>", livetv_categories);
    this.streamURL = "http://hd.qicktech.com:2095/live/"+username+"/"+password+"/"+livetv_categories[0].stream_id+".m3u8"
    console.log("Stream URL", this.streamURL)
  }

}
