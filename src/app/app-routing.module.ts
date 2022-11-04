import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as path from "path";
import {StudentTableComponent} from "./views/student-table/student-table.component";
import {StudentDetailComponent} from "./views/student-detail/student-detail.component";
import {MainWindowComponent} from "./views/main-window/main-window.component";
import {StudentFromComponent} from "./views/student-from/student-from.component";

const routes: Routes = [
  {path:'students',component:StudentTableComponent},
  {path:'students/:id',component:StudentDetailComponent},
  {path:'mainWindow',component:MainWindowComponent},
  {path:'studentForm',component:StudentFromComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
