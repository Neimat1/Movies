import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies=data.results.slice(0,10);
    })

    this._MoviesService.getTrending('tv').subscribe((data)=>{
      this.trendingTv=data.results.slice(0,10);
    })

    this._MoviesService.getTrending('person').subscribe((data)=>{
      this.trendingPeople=data.results.slice(0,10);
    })
  }

  ngOnInit(): void {
  }

}