import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCalculator';
  toshow = '';
  currvalue=''

  writetoinput(value:any){

    this.currvalue=this.currvalue + value
    this.toshow = this.currvalue

  }
  equal(){
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
  }
  clear(){
    this.currvalue='';
    this.toshow = '0';
  }
  back(){
    this.currvalue = this.currvalue.slice(0,-1);
    this.toshow = this.currvalue;
    if(this.currvalue ==''){this.currvalue='0'}
    this.currvalue = this.toshow;

  }
calvalue(solve:any){
 this.toshow = eval(solve)
  }
}
