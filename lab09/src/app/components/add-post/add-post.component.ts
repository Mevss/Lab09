import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'add-post',
  imports: [FormsModule, CommonModule],
  providers: [AuthService],
  templateUrl: './add-post.component.html',
  standalone: true,
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  constructor(private dataService: DataService, public authService: AuthService) {}

  onSubmit(form: any) {
    if (form.valid) {
      const newPost = {
        title: form.value.title,
        text: form.value.text,
        image: form.value.image || 'https://www.pixelstalk.net/wp-content/uploads/2016/04/Landscape-pictures-images-download.jpg',
      };
      this.dataService.addPost(newPost);
      form.reset();
    }
  }
}
