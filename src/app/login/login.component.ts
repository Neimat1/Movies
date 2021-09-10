import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
FormControl

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  loginForm =new FormGroup({
    email:new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required)
  })
  submitLoginForm(loginForm:FormGroup){
    // console.log(loginForm.value);
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == 'success'){
        localStorage.setItem('userToken',response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['home']);
      }
      else{
        // this.error=response.errors.email.message;

        //problem
      }
      });

  }
  ngOnInit(): void {
  }

}
