import { Component, OnInit, ViewChild } from '@angular/core';
import {SearchBarComponent} from "../../shared/search-bar/search-bar.component";
import {BlogComponent} from "../blog/blog.component";
import { FilterTextPipe } from "../../pipes/filter-text.pipe"
import { DataService } from '../../services/data.service';

@Component({
 selector: 'blog-home',
 standalone: true,
 imports: [SearchBarComponent, BlogComponent, FilterTextPipe],
 templateUrl: './blog-home.component.html',
 styleUrl: './blog-home.component.css'
})
export class BlogHomeComponent implements OnInit {
  @ViewChild(BlogComponent) blogComponent!: BlogComponent;
 public filterText: string = '';

 constructor(private dataService: DataService) {
 }

 ngOnInit(): void {
 }
  deleteAllPosts() {
      if (confirm('Jesteś pewien?')) {
        this.dataService.deleteAllPosts().subscribe({
          next: () => {
            console.log('All posts deleted successfully');
          },
          error: (err) => console.error('Error deleting posts:', err)
        });
      }
    }
 getName($event: string): void {
   this.filterText = $event;
 }

 refreshPosts(): void {
     this.blogComponent.getAll();
 }
}
