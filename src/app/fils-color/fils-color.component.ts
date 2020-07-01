import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fils-color',
  templateUrl: './fils-color.component.html',
  styleUrls: ['./fils-color.component.css']
})
export class FilsColorComponent implements OnInit {

  @Input() favoriteColor = 'red';
  // Je prépare l'evenement que je vais emettre pour mon père
  // L'eventEmiiter s appelle sendMyFavouriteColor
  //c'est cet evenement que mon pere doit écouter
  @Output() sendMyFavoriteColor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMyFavoriteColorToDad() {
    this.sendMyFavoriteColor.emit(
        this.favoriteColor
    );
  }
}
