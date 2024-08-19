import { Component, OnInit } from '@angular/core';
import { th } from '@faker-js/faker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentView: string = 'login';
  password: string = '';
  isPasswordVisible: boolean = false;
  selectOption: boolean = false;

  setView(view: string): void {
    this.currentView = view;
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
