import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {
  friends:String[]=['avishek', 'manish', 'brejendra', 'ankit', 'manish','tom', 'vijay kumar','gopesh']

  scores = [21,31,12,7, 10,16]

  locations = [
    {
      city: "Chennai",
      code:"044"
    },
    {
      city: "Bangalore",
      code:"080"
    },
    {
      city: "Delhi",
      code:"010"
    },
    {
      city: "Kolkata",
      code:"033"
    }
  ]

  display: boolean = false

  check = 2
  check1 = 'Sonali'

  salary = 1234

  myDate = new Date



  constructor() { }

  ngOnInit() {
  }

}
