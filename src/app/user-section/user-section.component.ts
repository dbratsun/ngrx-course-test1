import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { Observable } from "rxjs/Observable";
import { UserVM } from "app/user-section/user.vm";
import { userSelector } from "app/user-section/userSelector";
import { userHeaderSelector } from "app/user-section/userHeaderSelector";

@Component({
  selector: 'user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  users$: Observable<UserVM[]>;
  header$: Observable<string>;

  constructor(private store: Store<ApplicationState>) { 
      this.users$ = store.select(userSelector);    
      this.header$ = store.select(userHeaderSelector);
  }

  ngOnInit() {
  }

}
