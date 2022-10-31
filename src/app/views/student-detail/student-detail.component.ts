import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Student} from "../../entities/student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {




  readonly refreshRate = 3000;
  live = false;
  // @ts-ignore
  activatedId: number = null;
  // @ts-ignore
  student: Student=null;

  constructor(private router: Router,private route:ActivatedRoute,private studentService :StudentService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      // @ts-ignore
      this.activatedId = +params.get('id');
    });
    this.live=true;
    this.loadData().then(()=>{
      this.refreshData();
    })

  }

  async loadData():Promise<void>{
    // @ts-ignore
    this.student = await this.studentService.getById("id/" + this.activatedId)
    if(this.student !== null){
      // this.router.navigate(['mainWindow'])
    }
  }

  async refreshData() {
    if (this.live){
      await this.loadData();
      setTimeout(()=>{
        this.refreshData();
      },this.refreshRate)
    }
  }

}
