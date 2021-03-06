import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
 //properties
 serverID:number=10;
 serverStatus:string='OnLine';
 mainServer:boolean=true;

 name:string='Kiran';
 age:number=23;
 salary:number=5000;

 firstName:string='Sai';
 lastName:string='SK';

 imagePath:string="data:image/jpeg;base64,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";


 constructor() {

  }

 ngOnInit(): void {
  }

  getFullName():string{
    return this.firstName+' '+this.lastName;
  }
 
 convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

}

