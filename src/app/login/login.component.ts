import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../common/custom_form_validator';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private router: Router,
    public form: FormBuilder,
    public loginService: LoginService
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  public buildLoginForm() {
    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, CustomValidators.validatePassword])],
    });
  }

  public login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(data => {
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('/home');
        }
      }, (error) => {
        console.error('Error:', error);
      });
    }
  }

  public signup() {
    this.router.navigateByUrl('/signup');
  }

}
