import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  date: any = { year: '', month: ''};
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.date.year = params.get('year');
      this.date.month = params.get('month')
    })
  }

  home_onClick() {
    this.router.navigate(['']);
  }

}
