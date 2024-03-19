import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Project';
import { Tag } from 'src/app/models/tag';
import { ProjectCardComponent } from 'src/app/project-card/project-card.component';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Projects');
    this.projects = this.projectService.getProjects();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }

    if(this.python || this.csharp || this.java || this.javascript || this.angular || this.typescript || this.nodejs || this.aspnet || this.react){
      this.filtering=true;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilters(){
    this.angular=false;
    this.aspnet=false;
    this.python=false;
    this.csharp=false;
    this.typescript=false;
    this.nodejs=false;
    this.javascript=false;
    this.java=false;
    this.react=false;
    this.filtering=false;

    this.projects = this.projectService.getProjects();
  }

}
