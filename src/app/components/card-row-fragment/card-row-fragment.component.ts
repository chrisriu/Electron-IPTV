import { Component, OnInit } from '@angular/core';
import {Movie, MovieCard} from '../../models';
import {XtreamCodeAPIService, ShareService} from '../../services';
import { faDivide } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card-row-fragment',
  templateUrl: './card-row-fragment.component.html',
  styleUrls: ['./card-row-fragment.component.css']
})
export class CardRowFragmentComponent implements OnInit {

  movies : Movie[]
  movieCards: MovieCard[]

  constructor(private xcAPIService: XtreamCodeAPIService, private shareService: ShareService) { }

  ngOnInit(): void {
    this.makeFragment(this.movies)
  }

  makeFragment(movies: Movie[]){

  }






}
