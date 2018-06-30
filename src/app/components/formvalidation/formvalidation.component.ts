import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../../common/custom_form_validator';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(public form: FormBuilder, public postsService: PostsService) { }

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

  public signUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm);
      this.postsService.signUp(this.signUpForm.value).subscribe(data => {
        console.log('data==================>>', data);
      });
    }
  }
}
