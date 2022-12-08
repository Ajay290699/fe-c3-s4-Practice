import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private service:ServicesService) { }

  saveBlog() {
    if(this.blog.title){
      this.service.addData(this.blog).subscribe({
        next:val =>{
          alert("Blog added Successfully");
          console.log(val)
          this.blog = {}
        },
        error:err => console.log(err)
      })
    }
  }
}
