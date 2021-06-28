import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  email: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {

   }

  login() {
    console.log(this.email);
    this.userService.login(this.email, this.password).subscribe(response => {
      if (response) {
        this.error = false;
        let token = response['token'];
        localStorage.setItem('token', token);
        let id = response['id'];
        localStorage.setItem('id', id);
        //this.router.navigate(['/dashboard']);
        window.location.href="/dashboard";
      }
      else { this.error = true; }
    });
  }
}
