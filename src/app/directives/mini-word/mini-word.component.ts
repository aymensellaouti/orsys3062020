import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent implements OnInit {
  color = 'yellow';
  font = 'verdana';
  size = 20;
  constructor() {}

  ngOnInit(): void {}
}
