import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import {log} from "util";
@Component({
  selector: 'app-write',
  templateUrl: './write.component.html'
})
export class WriteComponent implements OnInit {
  model: any = {};
  blogs: Object [];
  currentUser: any;
  currentUserId: string ;
  pressed: boolean = false;
  editid: number;
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
    });
    }
  editButtonPressed (i: number) {
    console.log("Button Pressed");
    this.editid = i;
    console.log(i);
    this.pressed = true;
  }
  editButton(old_id: number){
    var title = <HTMLInputElement>document.getElementById('new_title');
    var body = <HTMLInputElement>document.getElementById('new_body');
    const blog = {
      title: title.value,
      body: body.value,
      author: this.currentUser['id'],
      authorName: this.currentUser['username'],
      id: old_id
    };
    if ( (body.value == '') || (title.value == '')){
      alert("Title and Body can't be empty");
    }
    else{
      this.request.updateData(blog).subscribe(data => {this.blogs.push(data)});
    }
  }
  saveButton(){

    var title = <HTMLInputElement>document.getElementById('title');
    var textArea = <HTMLInputElement>document.getElementById('textarea1');
    const blog = {
      title: title.value ,
      body: textArea.value,
      author: this.currentUser['id'],
      authorName: this.currentUser['username']
    };
    if ( (textArea.value == '') || (title.value == '')){
      alert("Title and Body can't be empty");
    }
    else{
      this.request.postData(blog).subscribe(data => {this.blogs.push(data)});
    }

  }
}
