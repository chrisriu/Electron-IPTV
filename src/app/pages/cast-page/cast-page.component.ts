import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TMDbAPIService} from '../../services';
@Component({
  selector: 'app-cast-page',
  templateUrl: './cast-page.component.html',
  styleUrls: ['./cast-page.component.css']
})
export class CastPageComponent implements OnInit {
  credit_id : string;
  cast_info: any;
  gender: any;
  known_for_movies: any = []
  constructor(private activeRouter: ActivatedRoute, private tmdbAPIService: TMDbAPIService) { }

  async ngOnInit(){
    this.credit_id = this.activeRouter.snapshot.params.credit_id
    let credits_info = await this.tmdbAPIService.getCastInfoByCreditId(this.credit_id)
    this.known_for_movies = credits_info["person"]["known_for"]
    let person_id = credits_info["person"]["id"]
    this.cast_info = await this.tmdbAPIService.getPersonInfoByPersonId(person_id)
    if(this.cast_info["gender"] == 1){
      this.gender = "Female"
    } else if (this.cast_info["gender"] == 2){
      this.gender = "Male"
    }

    console.log(this.known_for_movies)
    console.log(this.cast_info)
  }




}
