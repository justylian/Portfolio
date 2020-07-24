import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function() {
      if($(window).scrollTop() > 800) {
        console.log("el")
        $('#arrow-up').show();
        $('#arrow-down').hide();

      }
      else if($(window).scrollTop() === 0) {
        $('#arrow-down').show();
      }
         else {
        console.log("k")
        $('#arrow-up').hide();

      }
  });
  }

  public scrollDown(el) {
    let element = document.getElementById(el);

    console.log(el)
    element.scrollIntoView({behavior:"smooth"});
  }

  scrollUp() {
      console.log("home")
      let element = document.getElementById("home");
      element.scrollIntoView({behavior:"smooth"});
    }



    hoverScrollUp(){
      $("#arrow-up .arrow-text").animate({
        opacity:"1"
            }, 500);

    }
    unhoverScrollUp(){
      $("#arrow-up .arrow-text").animate({
        opacity:"0"
            }, 500);

    }

    hoverScrollDown(){
      $("#arrow-down .arrow-text").animate({
        opacity:"1"
            }, 500);

    }
    unhoverScrollDown(){
      $("#arrow-down .arrow-text").animate({
        opacity:"0"
            }, 500);

    }

}
