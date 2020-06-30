import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  name = 'aymen';
  path = 'rotating_card_profile2.png';
  constructor() { }
  ngOnDestroy(): void {
    console.log('j appelle le ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('j appelle le ngOnInit');
  }

}
