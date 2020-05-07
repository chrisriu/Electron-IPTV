import { Component, OnInit } from '@angular/core';
import {Movie, MovieCard} from '../../models';
import {XtreamCodeAPIService, ShareService} from '../../services';
import jQuery from 'jquery';

declare var $: any;
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
    (function ($){
      $(document).ready(
        function(){

          // Set the position of the cards...



          // Click of the next and prev button
          var slider_next_btn = $('.next_arrow');
          slider_next_btn.click(function (){
            // Get the grand parent element.
            var slider_genre_name = $('.movie_card').parent().parent().attr('id');

            $(`#${slider_genre_name} .movie_card`).each(function(){
              var this_left = $(this).position().left - 294;
              $(this).animate({left: this_left.toString()+'px'})
            })
          })

          var slider_prev_btn = $('.prev_arrow');
          slider_prev_btn.click(function (){
            var slider_genre_name = $('.movie_card').parent().parent().attr('id');
            $(`#${slider_genre_name} .movie_card`).each(function(){
              var this_right = $(this).position().left + 294;
              $(this).animate({left: this_right.toString()+'px'})
            })
          })

        }
      )
    })(jQuery);
  }
}
