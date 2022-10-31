import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Gender} from "../../entities/gender";
import {Student} from "../../entities/student";
import {StudentService} from "../../services/student.service";
import {GenderService} from "../../services/gender.service";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  students: Student[] = [];
  displayedColumns: string[] = [];
  genders: Gender[] = [];
  studentSearchForm = new FormGroup(
    {
      name: new FormControl(),
      index: new FormControl(),
      gender: new FormControl()
    }
  );

  get nameField():FormControl{
    return this.studentSearchForm.controls.name as FormControl;
  }
  get indexField():FormControl{
    return this.studentSearchForm.controls.index as FormControl;
  }
  get genderField():FormControl{
    return this.studentSearchForm.controls.gender as FormControl;
  }

  constructor(private studentService: StudentService, private genderService: GenderService) {
  }

  async loadAll(): Promise<void> {
    // this.displayedColumns = ['id','index', 'name', 'dob', 'address', 'mobile','email','gender_id','image_id'];
    this.displayedColumns = ['id','index', 'name', 'dob', 'address', 'mobile','email','gender_id','more-col'];
    this.students = await this.studentService.getAll();
    this.genders = await this.genderService.getAll();
  }

  ngOnInit(): void {
    this.loadAll();

  }


  async search():Promise<void>{
    let searchName = this.nameField.value
    let searchIndex = this.indexField.value
    let searchGender = this.genderField.value
    console.log(searchGender);
    let searchText = '';
    if(searchName != null && searchGender != null && searchIndex != null){
     // searchText = "name=" + searchName + "index=" + searchIndex + "&gender=" +searchGender;
    }else if (searchName != null){
      searchText = "name/" + searchName
    }else if (searchIndex != null){
      searchText = "index/" + searchIndex
    }else if (searchGender != null){
      searchText = "gender/" + searchGender
    }
    if(searchText != ''){
      this.students = await this.studentService.searchAll(searchText);
    }
  }

  clearForm() {
    this.studentSearchForm.reset();
    this.loadAll();
  }


}
