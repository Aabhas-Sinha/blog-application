import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  blogs: Object [];
  currentUser: any;
  currentUserId: string ;
  favoriteBlogs: Object[];
  constructor(private router: Router, private request: BlogService) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    console.log(this.currentUser);
   }

  ngOnInit() {
    this.request.loadData()
    .subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
      this.favoriteBlogs = this.blogs.filter((blog) => {
        return this.currentUser['favorites'].indexOf(blog['id']) > -1;
      });
    });
    console.log(this.favoriteBlogs);
  }

}
