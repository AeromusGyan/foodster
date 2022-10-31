import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  private baseUrl:String = environment.baseUrl;

  addMember(member:any){
    return this.http.post(`${this.baseUrl}/member`,member);
  }
}
