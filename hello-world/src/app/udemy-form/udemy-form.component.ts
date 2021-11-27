import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent {

  categories = [
    {id:1, name: 'Development'},
    {id:2, name: 'Art'},
    {id:3, name: 'Languages'},
  ]

  submit(x: any)
  {
    console.log(x)
  }

}
