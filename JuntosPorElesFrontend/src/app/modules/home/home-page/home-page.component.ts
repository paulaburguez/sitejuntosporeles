import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public carouselImages = [{
    image: 'assets/images/exemplo.png',
    id: "1"
  },
  {
    image: 'assets/images/Cachorro-comendo-melancia.jpg',
    id: "2"
  },
  ];

  carouselBasic: OwlOptions = {
    items: 1,
    autoHeight: true,
    loop: true, 
    nav: false,  
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
