import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultBgc = 'red';
  color = 'yellow';
  bgc = this.defaultBgc;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(newColor: string) {
    this.bgc = newColor;
  }

  remettreLaCouleurEnVert() {
    this.color = 'green';
  }
  resetDefaultColor() {
    this.bgc = this.defaultBgc;
  }

}
