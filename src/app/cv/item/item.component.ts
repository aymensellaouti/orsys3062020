import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendSelectedPersonne() {
    console.log('the selected personne is ', this.personne);
    this.selectPersonne.emit(this.personne);
  }
}
