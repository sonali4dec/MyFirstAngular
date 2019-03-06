import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { StringsortPipe } from './custompipe/stringsort.pipe';
import { TemplatesComponent } from './forms/templates/templates.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ParentformComponent } from './forms/parentform/parentform.component';
import { TaskmanagerComponent } from './task/taskmanager/taskmanager.component';
import { LocalServiceComponent } from './consume/local-service/local-service.component';
import { LocalService2Component } from './consume/local-service2/local-service2.component';
import { RemoteApiComponent } from './consume/remote-api/remote-api.component';
import { ViewuserdetailsComponent } from './consume/viewuserdetails/viewuserdetails.component';
import { LivesearchPipe } from './custompipe/livesearch.pipe';
import { CustomerComponent } from './bank/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    DaughterComponent,
    FordirectiveComponent,
    NumbersortPipe,
    StringsortPipe,
    TemplatesComponent,
    ReactiveformsComponent,
    NotfoundComponent,
    ParentformComponent,
    TaskmanagerComponent,
    LocalServiceComponent,
    LocalService2Component,
    RemoteApiComponent,
    ViewuserdetailsComponent,
    LivesearchPipe,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:FatherComponent,
        pathMatch: 'full'
      },
      {
      path:'family',
      component: FatherComponent
      },
      {
        path:'directive',
        component: FordirectiveComponent
      },
      {
        path:'form',
        component: ParentformComponent,
        children: [
          {
            path:'',
            component:TemplatesComponent,
            pathMatch: 'full'
          },
          {
            path:"templateform",
            component: TemplatesComponent
          },
          {
            path:"reactiveform",
            component: ReactiveformsComponent
          }
        ]
      },
      {
          path:'task',
          component: TaskmanagerComponent
      },
      {
        path: 'local',
        component: LocalServiceComponent
      },
      {
        path: 'local2',
        component: LocalService2Component
      },
      {
        path: 'remote',
        component: RemoteApiComponent
      },
      {
        path:'viewuser/:myid',
        component: ViewuserdetailsComponent
      },
      {
        path:'bank',
        component: CustomerComponent
      },
      {
        path:'**',
        component: NotfoundComponent
      }
            
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
