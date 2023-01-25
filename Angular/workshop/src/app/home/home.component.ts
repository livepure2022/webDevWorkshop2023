import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = "Mohan";
  userAge = 25;
  mobileNo = 124578562;
  emailId = "mohan@gmail";
  value = 0;
  clickedValue: any;
  userValue = "rahul";

  
  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    this.clickedValue = this.value++;
  }
}
