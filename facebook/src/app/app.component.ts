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
