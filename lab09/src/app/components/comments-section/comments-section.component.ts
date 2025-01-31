import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'comments-section',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.css'
})
export class CommentsSectionComponent {
  @Input() postId!: string;

  comments: string[] = [];
  newComment = '';

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.comments = this.commentsService.getComments(this.postId);
  }

  addComment() {
    if (this.newComment.trim()) {
      this.commentsService.addComment(this.postId, this.newComment);
      this.newComment = '';
      this.loadComments();
    }
  }
}
