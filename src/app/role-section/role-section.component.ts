import { Component, OnInit } from '@angular/core';
import { RolesService } from "app/services/roles.service";
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { LoadAppRolesAction } from "app/store/actions";
import 'rxjs/add/operator/skip';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'role-section',
  templateUrl: './role-section.component.html',
  styleUrls: ['./role-section.component.css']
})
export class RoleSectionComponent implements OnInit {

  applicationName$: Observable<string>;

  constructor(private rolesService: RolesService, private store: Store<ApplicationState>) { 
    this.applicationName$ = store.skip(1).map(this.mapStatetoUserName);
  }

  mapStatetoUserName(state: ApplicationState): string {
    return state.storeData.applications[state.uiState.applicationId].name;
  }

  ngOnInit() {
    this.rolesService.loadApplicationRoles().subscribe(
      allApplicationData => this.store.dispatch(new LoadAppRolesAction(allApplicationData)) 
    )
  }
 
}
