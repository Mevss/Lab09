import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: { image: string, title: string }[] = [];
  selectedImage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const posts = this.dataService.getAll();
    this.images = posts.map(post => ({
      image: post.image,
      title: post.title
    }));
  }

  enlargeImage(image: string) {
    this.selectedImage = image;
  }

  closeEnlargedImage() {
    this.selectedImage = null;
  }
}
