import { Component, OnInit, Input } from '@angular/core';
import { UserVM } from "app/user-section/user.vm";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: UserVM[];

  constructor() { }

  ngOnInit() { 
  }

}
