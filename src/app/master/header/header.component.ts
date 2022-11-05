import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService, private router:Router) { }

  isLoggedin: any;
  user:any;
  ngOnInit(): void {
    this.isLoggedin = this.login.isLoggedIn();
    this.user = this.login.getUser();
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x?.className == "row topnav") {
      x.className += (" responsive");
      var y = document.getElementById("tool");
      if (y?.className == "mat-toolbar food-btn mat-toolbar-single-row") {       
        y.className += (" nav");
      }
      // else if (y?.className == "mat-toolbar food-btn mat-toolbar-single-row nav") {
      //   y.classList.remove("nav");
      // }
      // else {
      //   y?.className == "mat-toolbar food-btn mat-toolbar-single-row";
      // }
    }
    else if (x?.className == "row topnav responsive") {
      x.classList.remove("responsive");
    }
    else {
      x?.className == "row topnav";
    }
  }

  logout() {
    this.login.logout();
    this.isLoggedin = false;
    this.user = null;
    window.location.reload();

  }
}
