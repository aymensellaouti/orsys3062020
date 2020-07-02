import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/personne';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private cvService: CvService
  ) {}
  //Je crée un événement
  @Output() forwardSelectedPersonne = new EventEmitter();

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }

  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
