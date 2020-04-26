import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-infomanager',
  templateUrl: './infomanager.component.html',
  styleUrls: ['./infomanager.component.css']
})
export class InfomanagerComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.galleryImages = [
        {
            small: 'assets/1.jpeg',
            medium: 'assets/1.jpeg',
            big: 'assets/1.jpeg'
        },
        {
            small: 'assets/2.jpeg',
            medium: 'assets/2.jpeg',
            big: 'assets/2.jpeg'
        },
        {
            small: 'assets/3.jpeg',
            medium: 'assets/3.jpeg',
            big: 'assets/3.jpeg'
        }
    ];
  }

}
