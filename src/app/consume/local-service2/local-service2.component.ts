import { Component, OnInit } from '@angular/core';
import { FriendserviceService } from 'src/app/services/friendservice.service';

@Component({
  selector: 'app-local-service2',
  templateUrl: './local-service2.component.html',
  styleUrls: ['./local-service2.component.css']
})
export class LocalService2Component implements OnInit {

  vendors = [];

  constructor(private ls:FriendserviceService) { }

  ngOnInit() {
    this.vendors = this.ls.cabService;
  }

}
