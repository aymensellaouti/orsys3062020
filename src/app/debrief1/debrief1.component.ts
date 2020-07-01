import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debrief1',
  templateUrl: './debrief1.component.html',
  styleUrls: ['./debrief1.component.css'],
})
export class Debrief1Component implements OnInit {
  pageTitle = 'Je suis la page Debrief 1';
  alignement = 'center';
  color = 'blue';
  ngOnInit(): void {}
  aligner(cote: string) {
    this.alignement = cote;
  }
  changeColor() {
    this.color = 'pink';
  }
}
