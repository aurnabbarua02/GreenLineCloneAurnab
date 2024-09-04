import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent implements OnInit {
  contactForm!: FormGroup;
  isAuthenticated!: boolean;

  constructor(private fb: FormBuilder, public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
   }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Form submitted successfully.\nYour name: ' + this.contactForm.value.name + '\nYour Email: ' + this.contactForm.value.email + '\nSubject: ' + this.contactForm.value.subject + '\nMessage: ' + this.contactForm.value.message)
      this.contactForm.reset()
    }
    else{
      alert("Please fillup the form correctly and completely")
    }
  }


}
