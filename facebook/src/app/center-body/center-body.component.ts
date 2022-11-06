import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-body',
  templateUrl: './center-body.component.html',
  styleUrls: ['./center-body.component.scss']
})
export class CenterBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  post = [
    {
      profileName : 'Elon Musk',
      profileImage:'assets/facebook/People/Elon Musk.jpg',
      postImage:'assets/facebook/Tesla Car.jpg',
      likedBy:'R Vignesh',
      postedTime : '1 h',
      postMessage:''


    },
    {
      profileName : 'Mark Zuckerberg',
      profileImage:'assets/facebook/People/Mark Zuckerberg.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/facebook post.jpg',
      likedBy:'Nikola Tesla',
      postedTime : '2 h',
      postMessage:''

    },
    {
      profileName : 'Bill Gates',
      profileImage:'assets/facebook/People/Bill Gates.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/post image 2.jpg',
      likedBy:'Mahindra Singh Dhoni',
      postedTime : '3 h',
      postMessage:''

    },
    {
      profileName : 'Nikola Tesla',
      profileImage:'assets/facebook/People/Nikola Tesla.jpg',
      postImage:'assets/facebook/sidebar icon/Post image/post image 3.jpg',
      likedBy:'Jack Ma',
      postedTime : '4 h',
      postMessage:''
    },
    {
      profileName : 'Mahindra Singh Dhoni',
      profileImage:'assets/facebook/People/Mahindra Singh Dhoni.jpg',
      postImage:'',
      likedBy:'Mahindra Singh Dhoni',
      postedTime : '3 h',
      postMessage:'Hi, How are you'
    },
    {
      profileName : 'Iron Man',
      profileImage:'assets/facebook/People/Iron Man.jpg',
      postImage:'',
      likedBy:'Jack Ma',
      postedTime : '4 h',
      postMessage:'Hi, How are you?.......'

    }
  ];

}
