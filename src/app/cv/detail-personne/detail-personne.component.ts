import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from './../services/cv.service';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // Demander à ce service la personne avec l'id
      const personne = this.cvService.getPersonneById(+params.id);
      // Si personne existe on l affiche
      if (personne) {
        this.personne = personne;
      } else {
        // Sinon on le retourne vers la liste
        this.router.navigate(['']);
      }
    });
  }
}
