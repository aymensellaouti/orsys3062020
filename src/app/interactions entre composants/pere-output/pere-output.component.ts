import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere-output',
  templateUrl: './pere-output.component.html',
  styleUrls: ['./pere-output.component.css']
})
export class PereOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  traiterClickSurLeFils(dataVenuDuFils) {
    console.log('On click sur l un de mes fils et il m a envoyé cette donnée', dataVenuDuFils);
  }
}
