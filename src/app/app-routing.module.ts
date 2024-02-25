import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './nav/home/home.component';
import { ResumeComponent } from './nav/resume/resume.component';
import { PortfolioComponent } from './nav/portfolio/portfolio.component';
import { ContactComponent } from './nav/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: PortfolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
