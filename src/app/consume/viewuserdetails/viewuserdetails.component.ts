import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-viewuserdetails',
  templateUrl: './viewuserdetails.component.html',
  styleUrls: ['./viewuserdetails.component.css']
})
export class ViewuserdetailsComponent implements OnInit {
  userdetails:any
  selectedUserId:any

  constructor(private active:ActivatedRoute , private rest:RestapiService) { }

  ngOnInit() {
    console.log(this.active)
    console.log(this.active.snapshot)
    console.log(this.active.snapshot.paramMap)
    this.selectedUserId = this.active.snapshot.paramMap.get("myid")

    this.rest.getUserData(parseInt(this.selectedUserId)+1).subscribe((user)=>{
      this.userdetails = user
    })
    
  }


}
