import { Injectable } from '@angular/core';
import { Personne } from './../Model/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'Teacher', 'as.jpg'),
      new Personne(2, 'zidan', 'zizou', 47, 123456, 'Coach', 'zizou.jpeg'),
    ];
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
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
