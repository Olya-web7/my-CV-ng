import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: 'about', component: AboutMeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'work', component: WorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
