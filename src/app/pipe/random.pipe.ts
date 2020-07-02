import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(nombre: number): number {
    return Math.random() * nombre;
  }

}
