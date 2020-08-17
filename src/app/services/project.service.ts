import { Injectable } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project1Is=false;
  project2Is=false;
  project3Is=false;
  project4Is=false;
  project5Is=false;
  project6Is=false;
  constructor() { }


  showProject(x){

    console.log(eval("this.project"+x+"Is"));
    var myVar=eval("this.project"+x+"Is");
    console.log(myVar);
     if(myVar===false) {
      $("#project"+x).show();$
      $("#h3-"+x+" .loader").animate({
        opacity:"1"
            }, 50);

      let element = document.getElementById("project-li-"+x);
      element.scrollIntoView({behavior:"smooth"});
      //$("#h3-"+x).text("See Less");
      $("#h3-"+x).contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = "See Less"
      $("#project"+x+"-min").show();

      myVar=true;
    }
    else{

      $("#project"+x).hide();

      let element = document.getElementById("project-li-"+x);
      element.scrollIntoView({behavior:"smooth"});
      //$("#h3-"+x).text("See More");
      $("#h3-"+x).contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = "See More"
      $("#project"+x+"-min").hide();

      myVar=false;
    }
    if(x===1){
      this.project1Is=myVar;
    }
    else if(x===2){
      this.project2Is=myVar;
    }
    else if(x===3){
      this.project3Is=myVar;
    }
    else if(x===4){
      this.project4Is=myVar;
    }
    else if(x===5){
      this.project5Is=myVar;
    }
    else{
      this.project6Is=myVar;

    }

  }
  hideLoader(x){
    console.log("wdc")
    $("#h3-"+x+" .loader").animate({
      opacity:"0"
          }, 50);
  }
}
