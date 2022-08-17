import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Nice View';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://unsplash.com/photos/75_s8iWHKLs';
  image3 = '"C:\Users\Laptop1\Desktop\homework\js-assignment-4-html-me-something-ww456zz\pics\dog.png"';

  constructor() { }

  ngOnInit() {
  }

}