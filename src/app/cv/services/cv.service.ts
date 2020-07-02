import { Injectable } from '@angular/core';
import { Personne } from './../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'Teacher', 'as.jpg'),
      new Personne(2, 'zidan', 'zizou', 47, 123456, 'Coach', 'zizou.jpeg'),
      new Personne(2, 'zidan', 'zizou', 47, 123456, 'Coach', ''),
      new Personne(
        2,
        'zidan',
        'zizou',
        47,
        123456,
        'Coach',
        '                        '
      ),
    ];
   }
   getPersonnes(): Personne[] {
     return this.personnes;
   }
}
