import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = [1024, 1011, 984].map((n) => `https://picsum.photos/id/237/200/300  `);
}