import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShareService } from '../../services';

@Component({
  selector: 'app-account-part',
  templateUrl: './account-part.component.html',
  styleUrls: ['./account-part.component.css']
})
export class AccountPartComponent implements OnInit {
  sliderTitlePosX: number;
  subscription: any;
  paymentForm: FormGroup;
  submitted =  false;
  constructor(private formBuilder: FormBuilder, private shareService: ShareService) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expirationMM: ['', Validators.required],
      expirationYY: ['', Validators.required],
      csc: ['', Validators.required]
    });
    this.subscription = this.shareService.getEmittedPosX().subscribe((sidebarPosX) => {
      this.sliderTitlePosX = sidebarPosX + 10
    })
  }
  get form() { return this.paymentForm.controls; }
  onSubmit(){
    this.submitted = true;

  }
}
