import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngs',
  templateUrl: './ngs.component.html',
  styleUrls: ['./ngs.component.css'],
})
export class NgsComponent implements OnInit {
  @Input() color = 'lightblue';
  @Input() bgc = 'gold';
  font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
