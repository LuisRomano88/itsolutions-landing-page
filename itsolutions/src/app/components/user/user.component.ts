import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = null; // Almacena el usuario seleccionado
  showModal: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }


  openModal(user: any) {
    this.selectedUser = {
      ...user,
      firstname: user.name.firstname,
      lastname: user.name.lastname,
      lat: user.address.geolocation.lat,
      long: user.address.geolocation.long,
      ...user.address
    };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedUser = null;
  }

  saveUser(updatedUser: any) {
    const index = this.users.findIndex(user => user.username === updatedUser.username);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    this.closeModal();
  }

  deleteUser() {
    this.users = this.users.filter(user => user.username !== this.selectedUser.username);
    this.closeModal();
  }

}
