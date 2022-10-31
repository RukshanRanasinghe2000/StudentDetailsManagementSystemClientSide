import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/api-config";
import {Student} from "../entities/student";

@Injectable({
  providedIn:'root'
})
export class StudentService{
  constructor(private http:HttpClient) {}

  async getAll():Promise<Student[]>{
    const url = ApiConfig.createUrl("students")
    // @ts-ignore
    return this.http.get<Student[]>(url).toPromise();
  }
  async searchAll(searchText: String): Promise<Student[]> {
    const url = ApiConfig.createUrl("students/" + searchText)
    // @ts-ignore

    return this.http.get<Student[]>(url).toPromise();
  }
  async getById(id:String):Promise<Student>{
    const url = ApiConfig.createUrl("students/"+id)
    // @ts-ignore
    return  this.http.get<Student>(url).toPromise();
  }
}
