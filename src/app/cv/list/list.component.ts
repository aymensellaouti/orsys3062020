import { Component, OnInit } from '@angular/core';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'Teacher', 'as.jpg' ),
      new Personne(2, 'sellaouti2', 'aymen2', 37, 123456, 'Teacher2', 'as.jpg' ),
    ];
  }

}
