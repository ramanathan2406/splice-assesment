import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show =false;
  toggleActive = true;
  userDetail:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userDetail =JSON.parse(localStorage.getItem("user_cred") || '{}')
  }

  logout() {
    localStorage.removeItem("user_cred");
    this.router.navigate(["/login"]);
  }

}
