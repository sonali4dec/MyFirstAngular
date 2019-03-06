import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendserviceService {

  cabService = ['ola', 'uber', 'zoom']

  sayHello(){
    return "Welcome to Cab Service API!!"
  }

  welcome(){
    console.log("Welcome to CAB Service...")
  }

  constructor() { }
}
