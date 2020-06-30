import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  peresNames = ['aymen','Antoine', 'Carene', 'Samir'];
  constructor() { }

  ngOnInit(): void {
  }

}
