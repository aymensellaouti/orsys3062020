import { Component, OnInit, Input } from '@angular/core';
import { Personne } from './../Model/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}
  goToDetails() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
