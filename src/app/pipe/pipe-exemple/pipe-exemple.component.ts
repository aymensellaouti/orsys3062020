import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exemple',
  templateUrl: './pipe-exemple.component.html',
  styleUrls: ['./pipe-exemple.component.css']
})
export class PipeExempleComponent implements OnInit {
  name = 'aymen';
  monObjet = {
    name: 'aymen',
    age: 38,
    cin: 1234
  }
  constructor() { }

  ngOnInit(): void {
  }

}
