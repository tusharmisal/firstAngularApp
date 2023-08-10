import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path : '',redirectTo:'/user',pathMatch:'full'
},
{path:'user',component:UserComponent},
{path:'courses',component:CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
