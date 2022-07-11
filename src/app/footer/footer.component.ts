import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title:string='Welcome to Angular Property Binding';
  img:string='https://www.wipro.com/content/dam/nexus/en/brand/images/wipro-primary-logo-color-rbg.png';
 
  btnDisabled=true;
 
  nameDetails = 'The name is Bond <b>James Bond<b/>';
  color = 'yellow';
  fontSize='20px';
 
  name='Peter';
  a ='right';
  college = 'Inderprastha Engineering college';

  constructor() { }

  ngOnInit(): void {
  }
  updateName(){
    this.name = 'john  Edward';
  }


}