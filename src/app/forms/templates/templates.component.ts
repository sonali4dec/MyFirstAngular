import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  
  fName=""
  lName=""
  hobby=""
  
  addHobby = function(hf){
    console.log("Hobby captured")
    console.log(hf);
  }
  constructor() { }

  ngOnInit() {
  }

}
