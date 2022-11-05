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
      profileName : 'Bill Gates',
      profileImage:'assets/facebook/People/Bill Gates.jpg',
      postImage:'',
      likedBy:'Mahindra Singh Dhoni',
      postedTime : '3 h',
      postMessage:'Hi, How are you'
    },
    {
      profileName : 'Nikola Tesla',
      profileImage:'assets/facebook/People/Nikola Tesla.jpg',
      postImage:'',
      likedBy:'Jack Ma',
      postedTime : '4 h',
      postMessage:'Hi, How are you?.......'

    }
  ];

  contract = [

    {
      contractName:'Abdul Kalam',
      contractImage:'assets/facebook/People/Abdul Kalam.png',
    },
    {
      contractName:'Bil Gates',
      contractImage:'assets/facebook/People/Bill Gates.jpg',
    },
    {
      contractName:'Abdul Kalam',
      contractImage:'assets/facebook/People/Abdul Kalam.png',
    },
    {
      contractName:'Bil Gates',
      contractImage:'assets/facebook/People/Bill Gates.jpg',
    },
    {
      contractName:'Iron Man',
      contractImage:'assets/facebook/People/Iron Man.jpg',
    },
    {
      contractName:'Jack Ma',
      contractImage:'assets/facebook/People/Jack Ma.jpg',
    },

];

constructor(public httpapi :HttpClient){

}
ngOnInit(): void {

  this.httpapi.get('https://api.publicapis.org/entries').subscribe(
    x=>{
     // this.a=x;
    }

  )
}


}
