import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fils-output',
  templateUrl: './fils-output.component.html',
  styleUrls: ['./fils-output.component.css'],
})
export class FilsOutputComponent implements OnInit {
  @Input() poids = 1;
  @Output() onMeClickDessus = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickSurLeFils() {
    this.onMeClickDessus.emit(this.poids);
  }
}
