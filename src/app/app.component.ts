import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string;

  // return this.users.find((user) => user.id === this.selectedUserId)! - (!) indicates that we alway are able to find user with such id;
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectedUser(id: string)  {
    this.selectedUserId = id;
  }
}
