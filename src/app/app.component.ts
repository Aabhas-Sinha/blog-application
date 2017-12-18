import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private router: Router) {

  }
  ngOnInit() {
    var user = (localStorage.getItem('currentUser') ) ;
    console.log(user);
    if (user == null) {
      // console.log("in if");
      this.router.navigateByUrl('login');
    }
    else {
      // console.log('in else');
      this.router.navigateByUrl('home');
    }
  }
 }
