import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  password: string = '';
  isPasswordVisible: boolean = false;
  showRegisterForm: boolean = false;
  changeLogin: boolean = true;


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
 

  toggleForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  toggleLogin(){
    this.changeLogin = !this.changeLogin;
  }

  onLoginSubmit() {
    // Lógica para manejar el login
    console.log('Login submit');
  }

  onRegisterSubmit() {
    // Lógica para manejar el registro
    console.log('Register submit');
  }
}
