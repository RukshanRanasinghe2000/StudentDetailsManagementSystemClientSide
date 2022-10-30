import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as path from "path";
import {StudentTableComponent} from "./views/student-table/student-table.component";
import {StudentDetailComponent} from "./views/student-detail/student-detail.component";

const routes: Routes = [
  {path:'students',component:StudentTableComponent},
  {path:'students/detail',component:StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
