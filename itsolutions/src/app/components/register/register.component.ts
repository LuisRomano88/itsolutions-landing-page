import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';
  currentView: string = 'register';
  isPasswordVisible: boolean = false;
  selectOption: boolean = false;


  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  
  }



}
