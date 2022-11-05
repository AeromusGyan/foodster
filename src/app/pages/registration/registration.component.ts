import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _member:MemberService, private snack: MatSnackBar) { }

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
    if(this.registration.value.username?.trim() == '' || this.registration.value.username == null){
      this.snack.open("Username is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.registration.value.firstname?.trim() == '' || this.registration.value.firstname == null){
      this.snack.open("Firstname is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.lastname?.trim() == '' || this.registration.value.lastname == null){
      this.snack.open("Lastname is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.email?.trim() == '' || this.registration.value.email == null){
      this.snack.open("Email is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.password?.trim() == '' || this.registration.value.password == null){
      this.snack.open("Password is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.contact?.trim() == '' || this.registration.value.contact == null){
      this.snack.open("Contact is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.house_no?.trim() == '' || this.registration.value.house_no == null){
      this.snack.open("House no is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.registration.value.city?.trim() == '' || this.registration.value.city == null){
      this.snack.open("City is required !!",'',{
        duration:3000,
      });
      return;
    }if(this.registration.value.pincode?.trim() == '' || this.registration.value.pincode == null){
      this.snack.open("Pincode is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.registration.value.post_office?.trim() == '' || this.registration.value.post_office == null){
      this.snack.open("Post Office is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.registration.value.landmark?.trim() == '' || this.registration.value.landmark == null){
      this.snack.open("Landmark is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.registration.value.locality?.trim() == '' || this.registration.value.locality == null){
      this.snack.open("Locality is required !!",'',{
        duration:3000,
      });
      return;
    }
    else{
    this._member.addMember(this.registration.value).subscribe(
      (data:any)=>{
        Swal.fire('Successfuly Done','You are successfully registerd on Foodster','success');
      },
      (error:any)=>{
        Swal.fire('Server error','You are not registerd on Foodster','error');
      }
    );
    }
  }
}
