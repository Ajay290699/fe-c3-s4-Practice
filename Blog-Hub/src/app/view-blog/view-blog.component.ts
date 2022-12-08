import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import {ServicesService} from '../Service/services.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit{
  blogs: Blog[] = [];

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getData().subscribe({
      next:(val:any) => this.blogs = val,
      error: err => console.log(err)
    })
  }

}
