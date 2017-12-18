import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  blogs: Object [];
  currentUser: Object;
  favoriteBlogs: Object[];
  filteredBlogs: Object [];
  _listFilter: string;
  constructor(private request: BlogService) { }
  blogTitle: string = 'Sample';
  blogText: string = 'This is a sample blog';
  ngOnInit() {
  this.request.loadData()
  .subscribe((data) => {
    this.blogs = data;
    this.filteredBlogs = this.blogs;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  });
  }
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBlogs = this.listFilter ? this.performFilter(this.listFilter) : this.blogs;
  }

  performFilter(filterBy: string): Object[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.blogs.filter((blog: Object) =>
      blog['title'].toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  do(i: number) {
    this.blogText = (this.filteredBlogs[i]['body']);
    this.blogTitle = this.filteredBlogs[i]['title'];
  }
  markFav(i: number) {
    console.log('marked as fav' + i);
    const localStorageObj = JSON.parse(localStorage.getItem('currentUser'));
    console.log(localStorageObj);
  }
}
