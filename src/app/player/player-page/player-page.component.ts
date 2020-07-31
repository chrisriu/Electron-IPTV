import { Component, OnInit,} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../../services';
import { Movie } from 'src/app/models';
@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css'],
})
export class PlayerPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private shareService: ShareService, private spinner: NgxSpinnerService) { }
  streamURL: any;
  ngOnInit(): void {

    let movie_id = this.activatedRoute.snapshot.queryParamMap.get('movie_id');
    let totalMovie = this.shareService.movies;
    let movie: Movie;
    for(var i=0; i<totalMovie.length; i++){
      if(movie_id == totalMovie[i].num.toString()){
        movie = totalMovie[i]
        break;
      }
    }

    this.streamURL = movie.stream_id+"."+movie.container_extension;
    let currentUsername = this.shareService.currentUser["username"];
    let currentUserpass = this.shareService.currentUser["password"]
    this.streamURL = "http://hd.qicktech.com:2095/movie/"+currentUsername+"/"+currentUserpass+"/"+this.streamURL;

    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    }, 5000)

  }
  ngOnDestroy(){
  }

}
