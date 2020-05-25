import { Component, OnInit, Input, HostListener } from '@angular/core';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';
import { Movie, MovieCard, Category, CategoryMovieCard } from '../../models';
import {ShareService, XtreamCodeAPIService} from '../../services';
declare var $: any;
@Component({
  selector: 'app-movie-card-block',
  templateUrl: './movie-card-block.component.html',
  styleUrls: ['./movie-card-block.component.css']
})
export class MovieCardBlockComponent implements OnInit {
  categories: Category[];
  sortedCategoryMovieCards: CategoryMovieCard[] = [];
  sortedCategoryMovieCardsPOSY: number = 0;
  username: string;
  password: string;


  constructor(private shareService: ShareService, private xcService: XtreamCodeAPIService) { }

  async ngOnInit() {
    this.username = this.shareService.currentUser["username"];
    this.password = this.shareService.currentUser["password"];
    this.categories = this.shareService.categories[1];
    this.getBlockMovieCards();

    this.loadFlickity()
  }
  onMouseWheelUp(event){
    console.log("Mouse wheel up");
    // (function ($) {
    //   $(document).ready(
    //     function () {
    //       event.preventDefault()
    //       console.log("This is the up")
    //       $(".movieBlocks").animate({scrollTop:$(".movieBlocks").position().top + 257});
    //     }
    //   )
    // })(jQuery)




  }

  onMouseWheelDown(event){
    console.log("Mouse wheel down");
    // (function ($) {
    //   $(document).ready(
    //     function () {
    //       event.preventDefault();
    //       console.log("Tis si down")
    //       $(".movieBlocks").animate({scrollTop:$(".movieBlocks").position().top - 257});
    //     }
    //   )
    // })(jQuery)
  }

  getBlockMovieCards(){
    const totalMovieCards = this.shareService.movieCards;
    const categories = this.shareService.categories[1];

    categories.forEach((category) => {
      var tempCategoryMovieCard = new CategoryMovieCard();
      tempCategoryMovieCard.categoryId = category["category_id"]
      tempCategoryMovieCard.categoryTitle = category["category_name"]
      tempCategoryMovieCard.categoryMovieCards = [];

      this.sortedCategoryMovieCards.push(tempCategoryMovieCard)
    })

    totalMovieCards.forEach( (movieCard, index) => {
      for(var i = 0; i<categories.length; i++){
        if(movieCard["categoryId"] == categories[i]["category_id"]){
          this.sortedCategoryMovieCards[i].categoryMovieCards.push(movieCard)
        }
      }
    })
  }

  loadFlickity(){
    (function ($) {
      $(document).ready(
        function () {
          Flickity.setJQuery($);
          jQueryBridget('flickity', Flickity, $);

          var $firstImagesCarousel = $('#first_row .carouselOfImages').flickity({
            contain: true,
            autoPlay: false,
            wrapAround: true,
            friction: 0.3,
            pageDots: false
          });
          function firstResizeCells() {
            var flkty = $firstImagesCarousel.data('flickity');
            if( flkty != undefined){
              var $current = flkty.selectedIndex;
              var $length = flkty.cells.length;
              if ($length <= '5') {
                $firstImagesCarousel.flickity('destroy');
              }
              $('#first_row .carouselOfImages .carouselImage').css('margin-left', '0px');
              $('#first_row .carouselOfImages .carouselImage').removeClass("nextToSelected");
              $('#first_row .carouselOfImages .carouselImage').eq($current - 3).addClass("nextToSelected");
              $('#first_row .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-20px');
              $('#first_row .carouselOfImages .carouselImage').eq($current - 2).css('margin-left', '-40px');
              $('#first_row .carouselOfImages .carouselImage').eq($current - 3).css('margin-left', '-60px');

              if ($current + 1 == $length) {
                var $endCell = "2"
              } else {
                var $endCell_num = ($current + 3)%10;
                var $endCell: string = $endCell_num.toString();
              }

              $('#first_row .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
              $('#first_row .carouselOfImages .carouselImage').eq(Number($endCell)).css('margin-left', '60px');
              $('#first_row .carouselOfImages .carouselImage').eq(Number($endCell) - 1).css('margin-left', '40px');
              $('#first_row .carouselOfImages .carouselImage').eq(Number($endCell) - 2).css('margin-left', '20px');
              $('#first_row .flickity-prev-next-button').css('width', '50px');
              $('#first_row .flickity-prev-next-button').css('height', '50px');
              $('#first_row .flickity-prev-next-button').css('top', '40%');
              $('#first_row .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
              $('#first_row .flickity-button.flickity-prev-next-button.next').css('right', '34px');
              $('#first_row .flickity-viewport').css('height', '205px')
            }
          };
          firstResizeCells();
          $firstImagesCarousel.on('scroll.flickity', function () {
            firstResizeCells();
          });
          $("#first_row .carouselImage img").click(function () {
            var $this = $(this);
            var imageID = $this.attr('data-tab');
            var imageSrc = $this.attr('src');

            $('.' + imageID).removeClass('hide');
            $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
          });


          // Second Row...

          var $secondImagesCarousel = $('#second_row .carouselOfImages').flickity({
            contain: true,
            autoPlay: false,
            wrapAround: true,
            friction: 0.3,
            pageDots: false
          });
          function secondResizeCells() {
            var flkty = $secondImagesCarousel.data('flickity');
            if( flkty != undefined){
              var $current = flkty.selectedIndex;
              var $length = flkty.cells.length;
              if ($length <= '5') {
                $secondImagesCarousel.flickity('destroy');
              }
              $('#second_row .carouselOfImages .carouselImage').css('margin-left', '0px');
              $('#second_row .carouselOfImages .carouselImage').removeClass("nextToSelected");
              $('#second_row .carouselOfImages .carouselImage').eq($current - 3).addClass("nextToSelected");
              $('#second_row .carouselOfImages .carouselImage').eq($current - 1).css('margin-left', '-20px');
              $('#second_row .carouselOfImages .carouselImage').eq($current - 2).css('margin-left', '-40px');
              $('#second_row .carouselOfImages .carouselImage').eq($current - 3).css('margin-left', '-60px');

              if ($current + 1 == $length) {
                var $endCell = "2"
              } else {
                var $endCell_num = ($current + 3)%10;
                var $endCell: string = $endCell_num.toString();
              }

              $('#second_row .carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelected");
              $('#second_row .carouselOfImages .carouselImage').eq(Number($endCell)).css('margin-left', '60px');
              $('#second_row .carouselOfImages .carouselImage').eq(Number($endCell) - 1).css('margin-left', '40px');
              $('#second_row .carouselOfImages .carouselImage').eq(Number($endCell) - 2).css('margin-left', '20px');
              $('#second_row .flickity-prev-next-button').css('width', '50px');
              $('#second_row .flickity-prev-next-button').css('height', '50px');
              $('#second_row .flickity-prev-next-button').css('top', '40%');
              $('#second_row .flickity-button.flickity-prev-next-button.previous').css('left', '114px');
              $('#second_row .flickity-button.flickity-prev-next-button.next').css('right', '34px');
              $('#second_row .flickity-viewport').css('height', '205px')
            }

          };
          secondResizeCells();
          $secondImagesCarousel.on('scroll.flickity', function () {
            secondResizeCells();
          });
          $("#second_row .carouselImage img").click(function () {
            var $this = $(this);
            var imageID = $this.attr('data-tab');
            var imageSrc = $this.attr('src');

            $('.' + imageID).removeClass('hide');
            $('.' + imageID + ' .product-detail-image img').attr('src', imageSrc);
          });

          $(".sliders#last_movies").css('margin-bottom', '5px')
        }
      );
    })(jQuery);
  }
}
