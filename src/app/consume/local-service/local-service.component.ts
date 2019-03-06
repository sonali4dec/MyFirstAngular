import { Component, OnInit } from '@angular/core';
import { FriendserviceService } from 'src/app/services/friendservice.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.css']
})
export class LocalServiceComponent implements OnInit {
    wekcomeMessage = ""
    cabServiceName = ""
    vendors = []
  constructor(private ls:FriendserviceService) { }

  ngOnInit() {
    this.wekcomeMessage = this.ls.sayHello();
    console.log(this.ls.sayHello())
    this.vendors = this.ls.cabService
    this.ls.welcome()
  }

  addCabService = function(){
    this.ls.cabService.push(this.cabServiceName)
    this.vendors = this.ls.cabService
  }

}
