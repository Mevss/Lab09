// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import {DataService} from "../../services/data.service";
// import {HttpClientModule} from "@angular/common/http";
//
// @Component({
//  selector: 'blog-item-details',
//  standalone: true,
//  imports: [HttpClientModule],
//  providers: [DataService],
//  templateUrl: './blog-item-details.component.html',
//  styleUrl: './blog-item-details.component.css'
// })
//
// export class BlogItemDetailsComponent {
// //   public image: string = 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
// //   public text: string = 'Tytuł';
//  public title: string = '';
//  public image: string = '';
//  public text: string = '';
//
//  constructor(private service: DataService, private route: ActivatedRoute) {
//  }
//
//  ngOnInit() {
//    let id: string = '';
//    this.route.paramMap
//      .subscribe((params: any) => {
//        id = params.get('id');
//      });
//
//    this.service.getById(id).subscribe((res: any) => {
//      this.text = res['title'];
//      this.image = res['text'];
//      this.text = res['image'];
//    });
//  }
// }
import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-blog-item-details',
  imports: [HttpClientModule, CommonModule],
  providers: [DataService],
  templateUrl: './blog-item-details.component.html',
  standalone: true,
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
        console.log('ID:', id);
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
    });
  }
}
