import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {

  title: string = "";

  // onSubmit() {
  //   let words: string[] = this.title.split(" ");

  //   words.forEach(word => {
  //     word = word.toLowerCase();

  //     if (word != "for" && word != "the" && word!= "of")
  //       word = word[0].toUpperCase() + word.substr(1)

  //     this.output = this.output.concat(`${word} `)
  //   });
  //   this.output = this.output.trim();
  //   this.output = this.output[0].toUpperCase() + this.output.substr(1);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
