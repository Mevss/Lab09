// add-post.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  newPost = {
    title: '',
    text: '',
    image: ''
  };

  constructor(private dataService: DataService) {}

  onSubmit() {
    if (this.newPost.title && this.newPost.text) {
      this.dataService.addPost(this.newPost);
      this.newPost = {
        title: '',
        text: '',
        image: ''
      };
    }
  }
}
