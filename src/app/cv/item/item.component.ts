import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  //on créer un event emmiter qui va emmetre la personne se trouvant dans l'item
  @Output() selectPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  // Lorsqu'on appelle cette méthode on emte l evenet incluant la personne
  sendSelectedPersonne() {
    this.selectPersonne.emit(this.personne);
  }
}
