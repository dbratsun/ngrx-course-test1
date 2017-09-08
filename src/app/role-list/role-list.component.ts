import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoleSummaryVM } from "app/role-section/role-summary.vm";

@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  @Input() 
  roles: RoleSummaryVM[];

  @Output() 
  roleSelected = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

  selectRole(roleId: number) {
    this.roleSelected.next(roleId);
  }

}
