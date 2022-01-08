import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/sevices/auth.service';
import { UtilService } from 'src/app/sevices/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show:boolean |any;
  loginForm:any = FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private util: UtilService) { }
  loginField ={
    "mobile":9791626638,
    "password":"password@123"
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile: ["",  [Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
      password: ["", [Validators.required]],
    });
  }

   password() {
    this.show = !this.show;
  }

  loginAccess(valid:any, value:any) {
    if (valid) {
      if((value.mobile == this.loginField.mobile) && (value.password ==this.loginField.password)){
        this.router.navigate(['/post'])
        let userDetail ={
          "username":"ram",
          "email":'ram@gmail.com'
        }
        localStorage.setItem("user_cred", JSON.stringify(userDetail));
        this.util.openSnackBar("login successfully", "dismiss", 3000);
      }
      else{
        this.util.openSnackBar("Mobile or password mismatch", "dismiss", 3000);
      }
    }
    else{
      this.util.openSnackBar("Please enter the valid mobile number and password", "dismiss", 3000);
    }
  }

}
