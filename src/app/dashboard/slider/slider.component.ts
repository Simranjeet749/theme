import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'td-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  customOptions: any = {
    loop: true,
    autoplay: true,
    navSpeed: 700,
    dots: true,
    navText: [
      "<img class='left-part' src='../assets/images/left-arrow.png'>", "<img class='right-part' src='../assets/images/right-arrow.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
        margin: 20
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit() {
  }

}
