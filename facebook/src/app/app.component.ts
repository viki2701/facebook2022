import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'facebook';
  a :any;


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

  contact = [

    {
      contactName:'Abdul Kalam',
      contactImage:'assets/facebook/People/Abdul Kalam.png',
    },
    {
      contactName:'Bil Gates',
      contactImage:'assets/facebook/People/Bill Gates.jpg',
    },
    {
      contactName:'Elon Musk',
      contactImage:'assets/facebook/People/Elon Musk.jpg',
    },
    {
      contactName:'Jeff Bezons',
      contactImage:'assets/facebook/People/Jeff Bezons.jpg',
    },
    {
      contactName:'Iron Man',
      contactImage:'assets/facebook/People/Iron Man.jpg',
    },
    {
      contactName:'Jack Ma',
      contactImage:'assets/facebook/People/Jack Ma.jpg',
    },
    {
      contactName:'Mahindra Singh Dhoni',
      contactImage:'assets/facebook/People/Mahindra Singh Dhoni.jpg',
    },
    {
      contactName:'Mark Zuckerberg',
      contactImage:'assets/facebook/People/Mark Zuckerberg.jpg',
    },
    {
      contactName:'Mukesh Ambani',
      contactImage:'assets/facebook/People/Mukesh Ambani.jpg',
    },
    {
      contactName:'Nikola Tesla',
      contactImage:'assets/facebook/People/Nikola Tesla.jpg',
    },
];







constructor(public httpapi :HttpClient){

}
ngOnInit(): void {

  this.httpapi.get('https://api.publicapis.org/entries').subscribe(
    x=>{
    //this.a=x;
    }

  )
}


}
