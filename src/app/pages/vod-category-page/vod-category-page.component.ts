import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieCard } from '../../models'
import { ShareService } from '../../services';
@Component({
  selector: 'app-vod-category-page',
  templateUrl: './vod-category-page.component.html',
  styleUrls: ['./vod-category-page.component.css']
})
export class VodCategoryPageComponent implements OnInit {
  category_id: number;
  lastMovieCards: MovieCard[];
  relatedMovieCards: MovieCard[];
  constructor(private activeRouter: ActivatedRoute, private shareService: ShareService) {

  }

  ngOnInit(): void {
    this.category_id = this.activeRouter.snapshot.params.category_id
    console.log("Category ID", this.category_id)
    this.lastMovieCards = this.shareService.lastMovieCards
  }

}
