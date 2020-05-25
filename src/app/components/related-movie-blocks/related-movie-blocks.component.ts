import { Component, OnInit, Input } from '@angular/core';
import { MovieCard } from '../../models';
import { ShareService } from '../../services';
@Component({
  selector: 'app-related-movie-blocks',
  templateUrl: './related-movie-blocks.component.html',
  styleUrls: ['./related-movie-blocks.component.css']
})
export class RelatedMovieBlocksComponent implements OnInit {
  @Input() categoryID: number;

  categoryMovieCards: MovieCard[] = []
  rowMovieCards: MovieCard[][] = [];
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    const totalMovieCards = this.shareService.movieCards;

    totalMovieCards.forEach((movieCard)=>{
      if(movieCard.categoryId == this.categoryID.toString()){
        this.categoryMovieCards.push(movieCard)
      }
    })
    var row_length = Math.floor(this.categoryMovieCards.length/4) + 1;
    this.rowMovieCards = []
    for (var i:number=0; i<row_length; i++){
      this.rowMovieCards[i] = []
      for(var j:number = 0; j<4; j++){
        this.rowMovieCards[i][j] = new MovieCard();
        if(this.categoryMovieCards[i*4+j] != undefined){
          this.rowMovieCards[i][j] = this.categoryMovieCards[i*4+j]
        }
      }
    }
  }

}
