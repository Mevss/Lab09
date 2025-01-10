import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private comments: { [postId: string]: string[] } = {};

  getComments(postId: string) {
    return this.comments[postId] || [];
  }

  addComment(postId: string, text: string) {
    if (!this.comments[postId]) {
      this.comments[postId] = [];
    }
    this.comments[postId].push(text);
  }
}
