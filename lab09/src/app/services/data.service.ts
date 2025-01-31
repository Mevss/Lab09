import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
 providedIn: 'root'
})
export class DataService {

 private url = 'http://localhost:3100';

 constructor(private http: HttpClient) {
 }

  getById(id: string) {
   return this.http.get(this.url + '/api/posts/' + id);
  }
  addPost(postData: any) {
      return this.http.post(`${this.url}/api/post`, postData).subscribe({
        next: (response) => console.log('Post added successfully:', response),
        error: (err) => console.error('Error adding post:', err),
      });
    }

  deleteAllPosts() {
    return this.http.delete(`${this.url}/api/posts`);
  }

 getAll() {
   return this.http.get(this.url + '/api/posts');
 }

}
