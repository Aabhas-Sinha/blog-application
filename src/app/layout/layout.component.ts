import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  signout() {
    console.log(localStorage.getItem('currentUser'));
    this.auth.logout();
    console.log(localStorage.getItem('currenUser'));
    this.router.navigateByUrl('login');
    window.location.reload();
    }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    else {
      return false;
    }
  }
}
