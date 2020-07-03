import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: any[] = [];
  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
}
