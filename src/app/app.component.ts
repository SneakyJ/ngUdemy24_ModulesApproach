import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    UserComponent, 
    TasksComponent],
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
    // console.log("Id: " + id);
    this.selectedUserId = id;
  }
}
