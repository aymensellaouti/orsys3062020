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
      this.cvService.getPersonneById(+params.id).subscribe(
        (personne) => this.personne = personne,
        (erreur) => this.router.navigate([''])
      );
/*       // Si personne existe on l affiche
      if (personne) {

      } else {
        // Sinon on le retourne vers la liste
        this.router.navigate(['']);
      }
 */    });
  }
  deletePersonne() {
    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (respone) => {
        console.log(respone);
        this.router.navigate(['']);
      },
      (erreur) => console.log(erreur)
    )
    /* if(this.cvService.deletePersonne(this.personne)) {
      this.router.navigate(['']);
    } else {
      alert('Problème de suppression');
    } */
  }
}
