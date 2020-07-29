import { ProjectService } from './../services/project.service';
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

  constructor(private projectService:ProjectService) { }

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
    this.projectService.showProject(x)
  }

}
