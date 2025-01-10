import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-item-details',
  imports: [],
  templateUrl: './blog-item-details.component.html',
  standalone: true,
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent {
  // @Input() image?: string;
  // @Input() text?: string;
  // @Input() postId!: string;
  public image: string = 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  public text: string = 'Tytuł';

}
