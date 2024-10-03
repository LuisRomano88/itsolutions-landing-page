import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { th } from '@faker-js/faker';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string = "";
  password: string = "";
  errorMessage: string = '';
  currentView: string = 'login';
  isPasswordVisible: boolean = false;
  selectOption: boolean = false;
  users: User[] = [];

  constructor(private router: Router, 
              private authService: AuthService,
              private userService: UsersService,
              ) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleSelectOption(){
    this.selectOption = !this.selectOption;
  }


  onLoginSubmit() {
    // Lógica para manejar el login
    console.log('Login submit');
  }

  onRegisterSubmit() {
    // Lógica para manejar el registro
    console.log('Register submit');
  }

  setView(view: string): void {
    this.currentView = view;
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Guardar el token y redirigir
        this.authService.setToken(response.token);
        this.router.navigate(['/tienda']);
      },
      
      error: (error) => {
        alert(this.errorMessage = 'Usuario o contraseña incorrectos');
      }
    });
  }

   /* login(): void {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password).subscribe(
          response => {
        // Guardar el token y redirigir
        this.authService.setToken(response.token);
        this.router.navigate(['/tienda']);
          },
          error => {
            alert(this.errorMessage = 'Usuario o contraseña incorrectos');
          }
        );
      }
    }*/


  // ------ REGISTER ------------- //
      // Método para registrar el usuario
      register(): void {
        this.userService.register(this.users).subscribe({
          next: (response) => {
            console.log('Usuario registrado con éxito:', response);
            // Puedes redirigir al usuario o realizar alguna acción
            this.router.navigate(['/login']); // Redirigir a la página de login
          },
          error: (error) => {
            console.error('Error al registrar el usuario:', error);
          }
        });
      }

  // ------ GET USER ------------- //
  listUser: User[] = [];
  
  getAllUser() {
    this.listUser = this.users;
  }
}












/*

<div class="question">
      <div class="question-head">
        <img
          class="img-logo"
          src="../../../assets/img/MARCA_COLORPNG.png"
          alt=""
        />
      </div>

      <div class="question-body">
        <div *ngIf="changeLogin; then register else login"></div>

        <ng-template #register>
          <p>
            ¿Eres nuevo en el sitio?<br /><a
              (click)="toggleForm()"
              (click)="toggleLogin()"
              >Registrate</a
            >
          </p>
        </ng-template>

        <ng-template #login>
          <p>
            Ya tengo una cuenta.<br /><a
              (click)="toggleForm()"
              (click)="toggleLogin()"
              >Iniciar Sesión</a
            >
          </p>
        </ng-template>
        
        <p><a (click)="toggleResetPassword()">Olvide la contraseña</a></p>
      </div>
    </div>

    <ng-template #formLogin>
      <div class="form-login" *ngIf="!showRegisterForm">
        <div *ngIf="!changeGreet; then welcome"></div>
        <ng-template #welcome>
          <h4>Bienvenidos</h4>
        </ng-template>

        <form (ngSubmit)="onLoginSubmit()">
          <label for="">Email</label>
          <input type="email" name="email" id="email" />

          <label for="contraseña">Contraseña</label>
          <input
            [type]="isPasswordVisible ? 'text' : 'password'"
            class="password-input"
            type="password"
            name="password"
            id="password"
          />
          <i id="icon-eye" (click)="togglePasswordVisibility()">
            <img
              [src]="
                isPasswordVisible
                  ? '../../../assets/img/eye-off.png'
                  : '../../../assets/img/eye.png'
              "
              alt="Toggle Password"
              alt=""
            />
          </i>

          <button class="btn-iniciar">Iniciar Sesion</button>
        </form>
      </div>
    </ng-template>

    <!-- Formulario de Registro -->

    <ng-template #registerForm>
      <div class="form-register" >
        <div *ngIf="!changeGreet; then regist"></div>
        <ng-template #regist>
          <h4>Registrarme</h4>
        </ng-template>

        <form (ngSubmit)="onRegisterSubmit()">
          <!-- Campos de registro -->

          <label for="name">Nombre</label>
          <input id="name" name="name" type="text" required />

          <label for="email">Email:</label>
          <input id="email" name="email" type="email" required />

          <label for="password">Contraseña:</label>
          <input id="password" name="password" type="password" required />

          <label for="re-password">Repetir Contraseña:</label>
          <input id="re-password" name="re-password" type="password" required />

          <button class="btn-iniciar" type="submit">Registrarme</button>
        </form>
      </div>
    </ng-template>

    <!-- Olvide la contraseña-->
    <div *ngIf="resetPassword; then changePassword; else formLogin"></div>
    <ng-template #changePassword>
      <div class="reset-password">
        <h4>Restaurar Contraseña</h4>
        <p>¡Hola!</p>
        <p>
          ¿Olvidaste tu contraseña? No te preocupes, completa tu direccion de
          correo y te enviamos un link para cambiarla.
        </p>
        <label for="email" id="email-forgot">Email</label>
        <input type="email" id="email" />
        <button class="btn-reset">Restaurar Contraseña</button>
      </div>
    </ng-template>
  </div>

  <!-- Renderiza el formulario de registro si showRegisterForm es true -->
  <div *ngIf="showRegisterForm">
    <ng-container *ngTemplateOutlet="registerForm"></ng-container>

    */
