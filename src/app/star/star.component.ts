import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  isFavorite = false;
  star = "";
  starFilled = "";

  constructor() { }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
  }

}
