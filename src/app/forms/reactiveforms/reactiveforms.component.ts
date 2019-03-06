import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  fName=""
  lName=""
  hobby=""
  
  rHobbyForm;
  constructor() { }

  addHobby = function(hf){
    console.log(hf);
  }

  ngOnInit() {
    this.rHobbyForm = new FormGroup({
      fName: new FormControl("", Validators.compose([
          Validators.required, Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$')
      ])),
      lName: new FormControl("",this.lastNameValidator),
      hobby: new FormControl("coding")
    });
  }

  lastNameValidator = function(control){
    if(control.value.length < 4){
      return {'lName': true}
    }
  }
}
