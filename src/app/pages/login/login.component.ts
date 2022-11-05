import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack: MatSnackBar, private login:LoginService, private router: Router) { }

  loginData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  Login(){
    if(this.loginData.value.username?.trim() == '' || this.loginData.value.username == null){
      this.snack.open("Username is required !!",'',{
        duration:3000,
      });
      return;
    }
    if(this.loginData.value.password?.trim() == '' || this.loginData.value.password == null){
      this.snack.open("Password is required !!",'',{
        duration:3000,
      });
      return;
    }
    else{
      this.login.generateToken(this.loginData.value).subscribe(
        (data: any) => {
          // Login
          console.log("sucess");
          console.log(data);
          this.login.loginUser(data.token);
            this.login.getCurrentUser().subscribe(
              (user: any) => {
                this.login.setUser(user);
                console.log(user);
                // Redirect ....ADMIN admin dshboard
                //Redirect .....NORMAL normal dashboard
                if (this.login.getUserRole() == "ADMIN") {
                  // Admin dashboard
                  setTimeout(() => {
                    window.location.href='/admin';
                    // this.router.navigate([""]);
                  }, 1000);
                  Swal.fire('Successfuly done !!', 'User role is ' + this.login.getUserRole(), 'success');
                }
                else if (this.login.getUserRole() == "NORMAL") {
                  // User dashboard
                  Swal.fire('Successfuly done !!', 'User role is ' + this.login.getUserRole(), 'success');
                  setTimeout(() => {
                    window.location.href='/';
                    // this.router.navigate([""]);
                  }, 1000);
                }
                else {
                  this.login.logout();
                }
              }
            )
        },
        (error) => {
          console.log(error);
          Swal.fire('Warning', 'Invalid details Try again !!', 'error')
        }
      )
    }

  }
}
