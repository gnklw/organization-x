import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  credentials = this.fb.group({
    username: '',
    password: ''
  });

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSignin() {
    //todo
    this.authService.authenticate(this.credentials.value.username!, this.credentials.value.password!)//.subscribe();
  }
}
