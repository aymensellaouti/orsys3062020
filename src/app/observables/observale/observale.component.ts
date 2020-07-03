import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observale',
  templateUrl: './observale.component.html',
  styleUrls: ['./observale.component.css'],
})
export class ObservaleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1500);
    });
    observable.subscribe(
      (val) => {
        console.log(val);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
    observable.subscribe(
      (data) => {
        console.log('observer 2 : ', data * 2);
      },
      (erreur) => {},

      () => {
        console.log('je viens de finir mon travail');
      }
    );
  }
}
