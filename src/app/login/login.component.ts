import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: Object;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}
    logIn() {
      const userName = document.getElementById('username');
      const password = document.getElementById('password');
      console.log(userName['value']);
      console.log(password['value']);
      this.authenticationService.login(userName['value'], password['value'])
        .subscribe(
          data => {
            if (data) {
              //  this.router.navigateByUrl(this.returnUrl);
              //  window.location.reload();
              console.log('Login Success');
              this.returnUrl = 'layout';
              this.router.navigate(['home']);
              // window.location.reload();
            } else {
              alert('Incorrect Username/Password!');
              // window.location.reload();
            }
          },
          error => {
            console.log('Error');
            // window.location.reload();
          });
        }
  ngOnInit() {
  }

}
