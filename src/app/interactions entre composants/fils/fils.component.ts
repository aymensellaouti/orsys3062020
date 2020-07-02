import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() nomDuPere = 'Nom de mon pere';
  @Input() pereColor = 'red';
  /*
    FilsComponent(nomDuPere, pereColor){}
  */
  constructor() {}

  ngOnInit(): void {}
}
