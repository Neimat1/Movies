import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  trendingMovies:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';
  customOptions: OwlOptions = {
    loop: true,
    margin:8,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies=data.results;
    })
  }

  ngOnInit(): void {
  }

}
