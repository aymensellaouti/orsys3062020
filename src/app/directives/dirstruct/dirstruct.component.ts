import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirstruct',
  templateUrl: './dirstruct.component.html',
  styleUrls: ['./dirstruct.component.css']
})
export class DirstructComponent implements OnInit {
  isVisible = true;
  btnTitle = 'Enlever';
  constructor() { }

  ngOnInit(): void {
  }

  process() {
    this.isVisible = !this.isVisible;
    this.btnTitle === 'Enlever' ? this.btnTitle = 'Ajouter' : this.btnTitle = 'Enlever';
  }

}
