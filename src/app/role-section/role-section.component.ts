import { Component, OnInit } from '@angular/core';
import { RolesService } from "app/services/roles.service";

@Component({
  selector: 'role-section',
  templateUrl: './role-section.component.html',
  styleUrls: ['./role-section.component.css']
})
export class RoleSectionComponent implements OnInit {

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.rolesService.loadRoles()
  }

}
