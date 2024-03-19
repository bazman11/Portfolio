import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isWorkExperineceOpen: boolean=false;
  isSkillsOpen: boolean=false;
  isEducationOpen: any=false;

  download() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/PDF/Benjamin_Ažman_-_Resume.pdf');
    link.setAttribute('download', 'Benjamin_Ažman_-_Resume.pdf');
    link.click();
    link.remove();
  }
  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit() {
    this.titleService.setTitle('Benjamin Ažman - Resume');
  }
}
