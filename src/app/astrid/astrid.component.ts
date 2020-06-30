import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astrid',
  templateUrl: './astrid.component.html',
  styleUrls: ['./astrid.component.css'],
})
export class AstridComponent implements OnInit {
  name = 'Astrid';
  bgc = 'lightblue';
  constructor() {}

  ngOnInit(): void {}
  changeColor() {
    this.bgc = 'yellow';
  }
  logColor(texte: string) {
    console.log(texte);
  }
}
