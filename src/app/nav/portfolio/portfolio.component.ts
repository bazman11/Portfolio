import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Project';
import { Tag } from 'src/app/models/tag';
import { ProjectCardComponent } from 'src/app/project-card/project-card.component';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private titleService: Title, private projectService: ProjectsService) {

   }

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Projects');
    this.projects = this.projectService.getProjects();
  }

  projects = {} as Project[];
}
