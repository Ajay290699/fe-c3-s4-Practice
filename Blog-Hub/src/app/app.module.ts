import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
