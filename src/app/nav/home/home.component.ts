import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private titleService: Title, private projectService: ProjectsService) { }

  featuredProject = {} as Project;

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Home');
    this.featuredProject = this.projectService.getProjectById(0);
  }
}
