import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  color = 'red';
  isHidden = false;
  constructor() {}

  ngOnInit(): void {}
  sayHello() {
    console.log('Hello Orsys');
  }
  afficherCacher() {
/*     if(this.isHidden) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    } */
    console.log(this.isHidden);
    this.isHidden = !this.isHidden;
  }
}
