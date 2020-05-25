import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-vodpage',
  templateUrl: './vodpage.component.html',
  styleUrls: ['./vodpage.component.css']
})
export class VODPageComponent implements OnInit {
  selected_movie_num: number;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.selected_movie_num = this.activeRouter.snapshot.params.category_id
    console.log("Selected Movie Number", this.selected_movie_num)
  }

}
