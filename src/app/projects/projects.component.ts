import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project1Is=false;
  project2Is=false;
  project3Is=false;
  project4Is=false;
  project5Is=false;
  constructor() { }

  ngOnInit(): void {
  }

  hoverExit(x){
    $("#project"+x+" .minimize-text").animate({
      opacity:"1"
          }, 500);

  }
  unhoverExit(x){
    $("#project"+x+" .minimize-text").animate({
      opacity:"0"
          }, 500);

  }
  showProject(x){

    console.log(eval("this.project"+x+"Is"));
    var myVar=eval("this.project"+x+"Is");
    console.log(myVar);
     if(myVar===false) {
      $("#project"+x).show();
      $("#h3-"+x).html("See Less");
      $("#project"+x+"-min").show();

      myVar=true;
    }
    else{
      $("#project"+x).hide();
      $("#h3-"+x).html("See More");
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
    else{
      this.project5Is=myVar;
    }
  }
}
