import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean = false;
  @Output() change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
