import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit(): void {}

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe(
            () => {
              console.log("User is logged in");
            }
        );
    }
  }
}
