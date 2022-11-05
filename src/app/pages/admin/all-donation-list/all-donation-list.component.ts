import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-donation-list',
  templateUrl: './all-donation-list.component.html',
  styleUrls: ['./all-donation-list.component.css']
})
export class AllDonationListComponent implements OnInit {
  constructor(private member:MemberService) { }

  imgUrl:any=environment.imgUrl;
  donationData:any= [];
  
  ngOnInit(): void {
    this.getAllDonation();
  }

  getAllDonation(){
    this.member.getAllDonation().subscribe(
      (data:any)=>{
        this.donationData = data;
      },
      (error:any)=>{
        alert("Server Error!!!");
      }
    );
  }
}
