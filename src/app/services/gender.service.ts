import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Gender} from "../entities/gender";
import {ApiConfig} from "../shared/api-config";

@Injectable({
  providedIn:'root'
})
export class GenderService{
  constructor(private http:HttpClient) {}

  async getAll():Promise<Gender[]>{
    const url = ApiConfig.createUrl("genders")
    // @ts-ignore
    return this.http.get<Gender[]>(url).toPromise();
  }
}
