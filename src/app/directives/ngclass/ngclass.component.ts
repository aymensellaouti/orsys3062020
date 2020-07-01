import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  isAllume = true;
  constructor() { }

  ngOnInit(): void {
  }
  allumer() {
    this.isAllume = !this.isAllume;
  }

}
