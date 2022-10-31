import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _member:MemberService) { }

  registration = new FormGroup({
    username: new FormControl('', Validators.required),
    firstname:new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    house_no: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    post_office: new FormControl('', Validators.required),
    locality: new FormControl('', Validators.required), 
    landmark: new FormControl('', Validators.required), 
    pincode: new FormControl('', Validators.required), 
    date_of_joining: new FormControl(formatDate(new Date(), 'EEEE, MMMM dd, yyyy, hh:mm:ss a zzzz', 'en'), Validators.required), 
   })

  ngOnInit(): void {
  }

  SignUp(){
    alert(JSON.stringify(this.registration.value));
    this._member.addMember(this.registration.value).subscribe(
      (data:any)=>{
        alert("Submitted");
      },
      (error:any)=>{
        alert("Error");
      }
    );

  }
}
