import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() {}
  @Output() forwardSelectedPersonne = new EventEmitter();

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'Teacher', 'as.jpg'),
      new Personne(2, 'zidan', 'zizou', 47, 123456, 'Coach', 'zizou.jpeg'),
    ];
  }

  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
