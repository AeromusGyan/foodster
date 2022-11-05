import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MemberService } from 'src/app/services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private member:MemberService) { }

  imgUrl:any=environment.imgUrl;
  donationData:any= [];
  peopleData:any = [];
  
  ngOnInit(): void {
    this.getAllPeople();
    this.getAllDonation();
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
