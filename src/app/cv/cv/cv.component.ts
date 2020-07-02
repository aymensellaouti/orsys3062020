import { Component, OnInit } from '@angular/core';
import { Personne } from './../Model/personne';
import { LoggerService } from './../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('Je suis le cv Component');
  }
  selectPersonne(personne: Personne) {
     this.selectedPersonne = personne;
  }

}
