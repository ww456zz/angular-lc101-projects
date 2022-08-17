import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Nice View';
  image1 = 'https://images.unsplash.com/photo-1622298122128-237fb849c73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9wJTIwZ3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
  image2 = 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
  image3 = 'https://images.unsplash.com/photo-1631918181927-2495522c0ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvbmdlYm9ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

  constructor() { }

  ngOnInit() {
  }

}