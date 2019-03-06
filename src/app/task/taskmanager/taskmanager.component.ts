import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  currentTask="";
  tasks=[
    "Plan the weekend!",
    "Plan the weekday break"
  ]

  doneTasks = [];
  
  @ViewChild("inputTask") ele: ElementRef

  addTask = function(){
    this.tasks.push(this.currentTask);
    this.currentTask = "";
    this.ele.nativeElement.focus();
  }

  changeTaskStatus = function(ct){
    console.log("changing status : " + this.tasks[ct])
    this.doneTasks.push(this.tasks[ct]);
    this.tasks.splice(ct,1);
  }

  undoneTaskStatus = function(udct){
    this.tasks.push(this.doneTasks[udct]);
    this.doneTasks.splice(udct,1);
  }


  constructor() { }

  ngOnInit() {
  }

}
