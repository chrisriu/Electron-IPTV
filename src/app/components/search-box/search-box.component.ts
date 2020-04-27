import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import jQuery from 'jquery';

declare var $: any;

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;
  searchIcon = faSearch;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    });
    (function ($) {
      $(document).ready(
        function() {
          console.log("this is function ")
          if ($("#search_input").is(":focus")) {
            console.log("This is focused")
          }
          $("#search_input").focus(function() {
            $("#search_icon").css("display", "none");
          });
          $("#search_input").focusout(function(){
            if($("#search_input").val() == "")
            {
              $("#search_icon").css("display", "block");
            }
          })
        }
      )
    })(jQuery);
  }

}
