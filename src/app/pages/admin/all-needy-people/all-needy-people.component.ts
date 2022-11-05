import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-all-needy-people',
  templateUrl: './all-needy-people.component.html',
  styleUrls: ['./all-needy-people.component.css']
})
export class AllNeedyPeopleComponent implements OnInit {

  constructor(private member:MemberService) { }

  peopleData:any= [];
  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople(){
    this.member.getAllPeople().subscribe(
      (data:any)=>{
        this.peopleData = data;
      },
      (error:any)=>{
        alert("Server Error!!!");
      }
    );
  }
}
