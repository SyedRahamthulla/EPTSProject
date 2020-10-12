import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  /*  this.users=[
      {
         "firstname":"syed",
         "lastname":"rahim",
         "email":"rahim.mtech@gmail.com",
         "id":1,
         "phone":"987654321",
         "gender":"male",
         "address":"Miyapur"
      }

    ]; */
    this.getUsers();
  }

  private getUsers()
  {
    this.userService.getUserList().subscribe(data => { this.users= data;});
  }

}
