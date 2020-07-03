import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
       (data) => {
         localStorage.setItem('token', data.id);
         this.router.navigate(['']);
       },
       (erreur) => console.log(erreur)
    );
  }

}
