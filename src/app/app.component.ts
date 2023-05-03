import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public birthDay:number = 0;
  public birthMonth:number = 0;
  public birthYear:number = 0;
  public age : {days:number,months:number,years:number}={days:-1,months:-1,years:-1};
  public Author = "Rajat";
  public frontEndMentorLink="";
  public AuthorLink = ""
  private isCalcBtnTouched = false;
  calculateAge(){
    this.isCalcBtnTouched = true;
    const dateNow  =new Date(Date().toString());
    const birthDate = new Date(this.birthYear,this.birthMonth,this.birthDay);
    const diffTime = dateNow.getTime() - birthDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays)
  }
}
