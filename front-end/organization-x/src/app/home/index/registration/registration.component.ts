import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationData = this.fb.group({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  constructor(private registrationService: RegistrationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegistration() {
    this.registrationService.registration(this.registrationData.value).subscribe();
    this.router.navigate(['login']);
  }
}
