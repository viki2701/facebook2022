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
      postedTime : '1 h',

    },
    {
      profileName : 'Mark Zuckerberg',
      profileImage:'assets/facebook/People/Mark Zuckerberg.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/facebook post.jpg',
      likedBy:'Nikola Tesla',
      postedTime : '2 h',
    },
    {
      profileName : 'Bill Gates',
      profileImage:'assets/facebook/People/Bill Gates.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/post image 2.jpg',
      likedBy:'Mahindra Singh Dhoni',
      postedTime : '3 h',
    },
    {
      profileName : 'Nikola Tesla',
      profileImage:'assets/facebook/People/Nikola Tesla.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/post image 3.jpg',
      likedBy:'Jack Ma',
      postedTime : '4 h',
    },
  ];



}
