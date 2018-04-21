import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../common/custom_form_validator';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(public form: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  public buildForm() {
    this.signUpForm = this.form.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, CustomValidators.validateCharacters])],
      password: ['', Validators.compose([Validators.required, CustomValidators.validatePassword])],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
}
