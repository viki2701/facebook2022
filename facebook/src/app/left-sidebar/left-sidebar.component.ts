import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  leftsidelist = [
    {
      leftsideIcon:'assets/facebook/Viki photo.jpeg',
      leftsideName:'Vignesh R',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/friends.png',
      leftsideName:'Friends',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Memories.png',
      leftsideName:'Memories',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Watch.png',
      leftsideName:'Watch',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Ads.png',
      leftsideName:'Ads Manager',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Ad.png',
      leftsideName:'Ad Centre',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Groups.png',
      leftsideName:'Groups',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Marketplace.png',
      leftsideName:'Marketplace',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/Saved.png',
      leftsideName:'Saved',
    },
    {
      leftsideIcon:'assets/facebook/sidebar icon/drops.png',
      leftsideName:'See More',
    },
  ];
  
  shortcut= [
    {
      shortcutImage:'assets/facebook/sidebar icon/electrical logo 2.jpg',
      shortcutName:'Atom Electrical Works',
    },
    {
      shortcutImage:'assets/facebook/sidebar icon/8 ball 2.jpg',
      shortcutName:'8 ball pool',
    },
    
  ];
  
 
}
