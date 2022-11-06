import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact = [

    {
      contactName:'Abdul Kalam',
      contactImage:'assets/facebook/People/Abdul Kalam.png',
      contactOnline:'',
    },
    {
      contactName:'Bil Gates',
      contactImage:'assets/facebook/People/Bill Gates.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Elon Musk',
      contactImage:'assets/facebook/People/Elon Musk.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Jeff Bezons',
      contactImage:'assets/facebook/People/Jeff Bezons.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Iron Man',
      contactImage:'assets/facebook/People/Iron Man.jpg',
    },
    {
      contactName:'Jack Ma',
      contactImage:'assets/facebook/People/Jack Ma.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Mahindra Singh Dhoni',
      contactImage:'assets/facebook/People/Mahindra Singh Dhoni.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Mark Zuckerberg',
      contactImage:'assets/facebook/People/Mark Zuckerberg.jpg',
      contactOnline:'active',
    },
    {
      contactName:'Mukesh Ambani',
      contactImage:'assets/facebook/People/Mukesh Ambani.jpg',
      contactOnline:'',
    },
    {
      contactName:'Nikola Tesla',
      contactImage:'assets/facebook/People/Nikola Tesla.jpg',
      contactOnline:'',
    },
];

}
