import { ProjectService } from './../services/project.service';
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

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  hoverScreen(x){
   /* $("#screens-text-"+x).animate({
      opacity:"1"
          }, 500);*/

  }

  unhoverScreen(x){
  /*   $("#screens-text-"+x).animate({
      opacity:"0"
    }, 500);*/



  }

  goToProject(x){
    if(x===1){
      this.projectService.showProject(1);

    }
    else if(x===2){
      this.projectService.showProject(1);

    }
    else if(x===3){
      this.projectService.showProject(4);

    }
    else if(x===4){
      this.projectService.showProject(5);

    }
    else if(x===5){
      this.projectService.showProject(1);

    }
    else if(x===6){
      this.projectService.showProject(3);

    }
    else if(x===7){
      this.projectService.showProject(1);

    }
    else if(x===9){
      this.projectService.showProject(6);

    }
    else if(x===10){
      this.projectService.showProject(6);

    }
    else{
      this.projectService.showProject(2);

    }
  }

}
