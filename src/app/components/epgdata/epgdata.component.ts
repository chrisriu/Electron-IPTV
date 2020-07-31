import { Component, OnInit, Input } from '@angular/core';
import {ShareService, XtreamCodeAPIService} from '../../services';
@Component({
  selector: 'app-epgdata',
  templateUrl: './epgdata.component.html',
  styleUrls: ['./epgdata.component.css']
})
export class EPGDataComponent implements OnInit {
  @Input() live_category_id: any;
  constructor(private shareService: ShareService, private xcService: XtreamCodeAPIService) { }

  async ngOnInit() {
    console.log("EPG Category ID =>", this.live_category_id)
    const currentUser = this.shareService.currentUser;
    const username = currentUser["username"]
    const password = currentUser["password"]
    const livetv_stream_response = await this.xcService.sendLiveTVStreamRequestCategoryIDUsingPromise(username, password, this.live_category_id)
    const livetv_stream = livetv_stream_response["__zone_symbol__value"]
    console.log(livetv_stream_response)
    console.log(livetv_stream)
  }

}
