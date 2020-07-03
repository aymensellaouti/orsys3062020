import { Injectable } from '@angular/core';
import { Personne } from './../Model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor(private http: HttpClient) {
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
  getFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  deletePersonneById(id): Observable<any> {
    const token = localStorage.getItem('token');
    //Il faut ajouter le token pour identifier le user
    const params = new HttpParams().set('access_token', token);
    return this.http.delete<any>(API_LINK + `/${id}`, { params });
  }

  deleteFakePersonne(personne: Personne) {
    const personneIndex = this.personnes.indexOf(personne);
    if (personneIndex === -1) {
      return false;
    } else {
      this.personnes.splice(personneIndex, 1);
      return true;
    }
  }
}
