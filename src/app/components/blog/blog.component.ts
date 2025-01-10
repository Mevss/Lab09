import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {BlogItemComponent} from "../blog-item/blog-item.component";
import {CommonModule} from "@angular/common";
import { AddPostComponent } from '../add-post/add-post.component';
import { GalleryComponent } from '../gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {FilterTextPipe} from '../../pipes/filter-text.pipe';
import {SearchBarComponent} from '../../shared/search-bar/search-bar.component';
import {BlogHomeComponent} from '../blog-home/blog-home.component';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [HttpClientModule, BlogItemComponent, CommonModule, AddPostComponent, GalleryComponent, FilterTextPipe, SearchBarComponent, BlogHomeComponent],
  providers: [DataService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
