import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieCard,MovieInfo } from '../../models'
import { ShareService } from '../../services';
@Component({
  selector: 'app-vod-category-page',
  templateUrl: './vod-category-page.component.html',
  styleUrls: ['./vod-category-page.component.css']
})
export class VodCategoryPageComponent implements OnInit {
  category_id: number;
  lastMovieCards: MovieCard[];
  cardMovieInfos: MovieInfo[] = [];
  allInfos: any = [];

  relatedMovieCards: MovieCard[];
  constructor(private activeRouter: ActivatedRoute, private shareService: ShareService) {

  }

  ngOnInit(): void {
    this.category_id = this.activeRouter.snapshot.params.category_id
    console.log("Category ID", this.category_id)
    this.lastMovieCards = this.shareService.lastMovieCards

    const totalMovieInfos = this.shareService.movieInfos;

    this.lastMovieCards.forEach((card, index) => {
      totalMovieInfos.forEach((info) => {
        if(card.tmdbID == info.tmdbID){
          this.cardMovieInfos.push(info)
        }
      })

      var temp_array = {"card": card, "infos":this.cardMovieInfos[index]}
      this.allInfos.push(temp_array)
    });

    console.log("All Infos =>", this.allInfos)

  }

}
