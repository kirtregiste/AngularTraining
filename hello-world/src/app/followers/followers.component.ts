import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers.service';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any = [];
  
  constructor(private service: FollowersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        let id = combined[0].get('id')
        let page = combined[1].get('page')

        return this.service.getAll();
      })
    ).subscribe(res => {
      this.followers = res;
    })

    // switchMap(obs,)
    // .subscribe(combined => {
    //   let id = combined[0].get('id')
    //   let page = combined[1].get('page')
    //   this.service.getAll()
    //     .subscribe(res => {
    //       this.followers = res;
    //     })
    // })

    // this.service.getAll()

    // this.route.paramMap.subscribe(params => {
    //   params.get('id');
    // })

    // this.route.queryParamMap
    // .subscribe(params => {

    // });

    
  }
  toConsole(follower: any) {
    console.log(follower);
  }


}
