import { Component, OnInit ,Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('2000ms'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  @Input() currentState;
  currentMode="white";
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

    //console.log(el)
    element.scrollIntoView({behavior:"smooth"});
  }

  scrollUp() {
      //console.log("home")
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

    colourMode(){
      //console.log("as");
      if(this.currentMode==="white"){
        //console.log("as");
        $("body").css("background-color","black");
        $("#colour").css("background-color","var(--main-color-2)");
        $("body").css("--main-color-1","#7e9090");
        $("#colour-text").text("Light Mode") ;
        $("#colour-text").css("color","var(--main-color-2)");

        this.currentMode="black";
      }
      else if(this.currentMode==="black"){
        $("body").css("background-color","white");
        $("#colour").css("background-color","var(--main-color-1)");
        $("body").css("--main-color-1","#2C3F40");
        $("#colour-text").text("Dark Mode") ;
        $("#colour-text").css("color","var(--main-color-1)");
        this.currentMode="white";
      }
    }

    hoverColourMode(){
      //console.log("as");
      $("#colour #colour-text").animate({
        opacity:"1"
            }, 500);
    }
    unhoverColourMode(){
      //console.log("as");
      $("#colour #colour-text").animate({
        opacity:"0"
            }, 500);
    }

}
