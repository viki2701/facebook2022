import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'facebook';
  studentDetails :any;
 
  form:any={
    search : ''
  }
constructor(public httpapi :HttpClient){

}
ngOnInit(): void {

  //this.getDetails("Bill");

}


getDetails(name:string){
this.httpapi.get("https://api.agify.io/?name="+name).subscribe(
  response =>{
   this.studentDetails = response;
  }
);
}

showData(){
  this.getDetails(this.form.search);
}

}
