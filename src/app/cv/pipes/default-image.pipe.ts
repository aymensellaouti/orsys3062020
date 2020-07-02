import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  // 'as.jpg' => 'as.jpg'
  // '' => 'cv.png'
  // '      ' => 'cv.png'
  transform(path: string): string {
    // si le path est null ou que c'est une chaine
    // vide ou des que des espaces retourne
    // l'image par défaut
    if (!path || path.trim() === '') {
      return 'cv.png';
    }
    // sinon retourne le path comme il est 
    return path;
  }

}
