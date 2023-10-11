import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewArrivalsService {
  constructor() {}

  getNewArrivals() {
    return [
      {
        itemImageSrc:
          'https://raw.githubusercontent.com/mustaq-amd/artelecom/main/src/assets/arr1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://raw.githubusercontent.com/mustaq-amd/artelecom/main/src/assets/arr2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://raw.githubusercontent.com/mustaq-amd/artelecom/main/src/assets/arr3.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ];
  }
}
