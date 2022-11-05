import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'facebook';

  post = [
    {
      profileName : 'Elon Musk',
      profileImage:'assets/facebook/People/Elon Musk.jpg',
      postImage:'assets/facebook/Tesla Car.jpg',
      likedBy:'R Vignesh',
      postedTime : '1 h'

    },
    {
      profileName : 'Elon Musk',
      profileImage:'assets/facebook/People/Elon Musk.jpg',
      postImage:'assets/facebook/Tesla Car.jpg',
      likedBy:'R Vignesh',
      postedTime : '1 h'
    }
  ];



}
