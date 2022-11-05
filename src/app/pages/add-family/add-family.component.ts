import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css']
})
export class AddFamilyComponent implements OnInit {
  files: any;
  checkbox: any;
  img:any=false;

  constructor(private member: MemberService, private snack: MatSnackBar) { }

  familyData = new FormGroup({
    name_of_needy_people: new FormControl('', Validators.required),
    contact: new FormControl(''),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    no_of_person: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    date_of_joining: new FormControl(formatDate(new Date(), 'EEEE, MMMM dd, yyyy, hh:mm:ss a zzzz', 'en')),
    drop_of_location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      this.files = event.target.files[0];
      this.img = true;
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

  addFamily() {
    if (this.familyData.value.name_of_needy_people?.trim() == '' || this.familyData.value.name_of_needy_people == null) {
      this.snack.open("name_of_needy_people is required !!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.familyData.value.address?.trim() == '' || this.familyData.value.address == null) {
      this.snack.open("Password is required !!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.familyData.value.city?.trim() == '' || this.familyData.value.city == null) {
      this.snack.open("Password is required !!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.familyData.value.pincode == '' || this.familyData.value.pincode == null) {
      this.snack.open("Password is required !!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.familyData.value.drop_of_location?.trim() == '' || this.familyData.value.drop_of_location == null) {
      this.snack.open("Password is required !!", '', {
        duration: 3000,
      });
      return;
    }
    if (this.familyData.value.description?.trim() == '' || this.familyData.value.description == null) {
      this.snack.open("Description is required !!", '', {
        duration: 3000,
      });
      return;
    }
    else {
      if (this.img) {
        this.familyData.value.image = this.files.name;
        // console.log(this.familyData.value);
        // alert(JSON.stringify(this.familyData.value));
        // console.log(this.img);
        if (this.checkbox) {
          this.member.addPeople(this.familyData.value).subscribe(
            (res: any) => {
              Swal.fire('Successfuly Done','Family successfully registerd on Foodster','success');
            },
            (error: any) => {
              Swal.fire('Server error','Family not registerd on Foodster','error');
            }
          );
        }
        else{
          this.snack.open("Please Accept terms & conditions!!!");
        }
      }
      else{
        this.snack.open("Please Select Real Family Image!!!");
      }
    }
  }
}
