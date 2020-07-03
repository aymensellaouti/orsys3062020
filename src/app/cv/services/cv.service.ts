import { Injectable } from '@angular/core';
import { Personne } from './../Model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'Teacher', 'as.jpg'),
      new Personne(2, 'zidan', 'zizou', 47, 123456, 'Coach', 'zizou.jpeg'),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  deletePersonne(personne: Personne) {
    const personneIndex = this.personnes.indexOf(personne);
    if(personneIndex === -1 ) {
      return false;
    } else {
      this.personnes.splice(personneIndex, 1);
      return true;
    }
  }
}
