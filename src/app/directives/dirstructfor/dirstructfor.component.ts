import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirstructfor',
  templateUrl: './dirstructfor.component.html',
  styleUrls: ['./dirstructfor.component.css']
})
export class DirstructforComponent implements OnInit {
  series = [
    {
      title: 'friends',
      nbSaison: 10
    },{
      title: 'how i met your mother',
      nbSaison: 10
    },{
      title: 'Prison break',
      nbSaison: 4
    },{
      title: 'H',
      nbSaison: 4
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
