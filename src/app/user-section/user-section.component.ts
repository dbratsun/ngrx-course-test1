import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";

@Component({
  selector: 'user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { 
    store.subscribe(
      state => { 
        console.log("users section received state", state);
      }
    )
  }

  ngOnInit() {
  }

}
