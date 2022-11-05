import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donateform',
  templateUrl: './donateform.component.html',
  styleUrls: ['./donateform.component.css']
})
export class DonateformComponent implements OnInit {

  constructor(private login: LoginService, private _donation: MemberService, private router: Router) { }

  userData: any = {};
  checked: any = false;
  files: any;
  checkbox: any;
  isLoggedIn: any;

  donateForm = new FormGroup({
    no_of_food: new FormControl('', Validators.required),
    name_of_food: new FormControl(''),
    food_description: new FormControl('', Validators.required),
    quantity: new FormControl(''),
    image: new FormControl(''),
    username: new FormControl(''),
    pick_up_location: new FormControl('', Validators.required),
    date_of_donation: new FormControl(formatDate(new Date(), 'EEEE, MMMM dd, yyyy, hh:mm:ss a zzzz', 'en'), Validators.required),
    status: new FormControl(true),
    terms_condition: new FormControl(false),
    member: new FormGroup({
      id: new FormControl('')
    })
  })

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    // console.log(this.isLoggedIn);
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.login.getCurrentUser().subscribe(
      (data: any) => {
        this.userData = data;
        // console.log(this.userData);
      }
    )
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      this.files = event.target.files[0];
    }
  }
  onChange(event: any) {
    // console.log(event)
    if (event.checked == true) {
      // console.log(event.checked)
      this.checkbox = event.checked;
    }
    else {
      this.checkbox = event.checked;
    }
  }
  donateNow() {
    if (this.checkbox == true) {
      this.donateForm.value.member!.id = this.userData.id
      this.donateForm.value.terms_condition = this.checkbox;
      this.donateForm.value.image = this.files.name;
      this._donation.addDonatiion(this.donateForm.value).subscribe(
        (res: any) => {
          Swal.fire('Successfuly Done', 'You are successfully Donoted Food on Foodster', 'success');
        }
      );
    }
    else {
      Swal.fire('Server error', 'You are not Donoted Food on Foodster', 'error');
    }
  }
}
