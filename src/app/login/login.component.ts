import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username = ''
  password = ''
  email = ''
  phonenumber = ''
  // errormessage ='Invalid credentials'
  // invalidLogin = false
  get f()
    {
      return this.form.controls;
    }
    submit()
    {
      console.log(this.form.value);
    }

    handlesubmit()
    {
      console.log(this.username);
      console.log(this.password);
      if(this.username==='krishna' && this.password==='admin' && this.phonenumber==='8190066051' && this.email==='krishna_anbalagan.1993cs@yahoo.com'){
        this.router.navigate(['welcome'])
        // this.invalidLogin = false
      }
      else{
        // this.errormessage = "Please enter the correct login details"
        this.router.navigate(['login'])
        // this.invalidLogin = true
      }
    }
    form = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(6)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      // confpassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phonenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]{10}$")]),
      email: new FormControl('',[Validators.required,Validators.email])
    });
  

  ngOnInit(): void {
  
  }
  
}
