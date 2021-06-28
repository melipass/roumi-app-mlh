import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  logged = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')){
      this.logged = true;
    }
    else {
      this.logged = false;
    }
  }

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/']);
    this.logged = false;
  }
}
