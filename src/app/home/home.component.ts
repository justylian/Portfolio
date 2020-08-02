import { Component, OnInit ,Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() currentState;
  currentMode="white";
  constructor() { }

  ngOnInit(): void {
    $(' .animate__animated ').each(function() {
      $(this).addClass('animate__slideInLeft ');
  });
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

      if($(window).scrollTop() > 600) {
        $('.animate__animated ').each(function() {

          $(this).addClass('animate__slideInLeft');

      });

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
      $('#arrow-up').hide();
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
        $("#colour-text").text("Bright Mode") ;
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

