import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { BlogComponent } from './components/blog/blog.component'
import { BlogItemComponent } from "./components/blog-item/blog-item.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, BlogComponent, BlogItemComponent, NavbarComponent],
 templateUrl: './app.component.html',
 styleUrl: './app.component.css'
})

export class AppComponent {
 public counter: number = 0;

 add() {
   this.counter++;
 }

 remove() {
   this.counter--;
 }
}
