import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationSectionComponent } from './application-section/application-section.component';
import { RoleSectionComponent } from './role-section/role-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RolesService } from "app/services/roles.service";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationSectionComponent,
    RoleSectionComponent,
    UserSectionComponent,
    UserListComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
