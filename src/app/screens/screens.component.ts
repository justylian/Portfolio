import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hoverScreen(x){
    $("#screens-text-"+x).animate({
      opacity:"1"
          }, 500);

  }
  unhoverScreen(x){
    $("#screens-text-"+x).animate({
      opacity:"0"
          }, 500);

  }

}
