import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 myFunction() {
  var x = document.getElementById("myTopnav");
  if(x?.className == "row topnav"){
      x.className +=(" responsive");
      var y = document.getElementById("tool");
      if(y?.className == "mat-toolbar mat-primary mat-toolbar-single-row"){
        y.className += (" nav")

      }
  }
  else if(x?.className == "row topnav responsive"){
    x.classList.remove("responsive");
  }
  else {
    x?.className == "row topnav";
  }
  // console.log(x)
}
}
