import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() personne = 'mère';
  constructor() {}

  ngOnInit(): void {}
}
