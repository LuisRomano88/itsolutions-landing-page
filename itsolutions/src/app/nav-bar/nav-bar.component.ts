import { HostBinding, HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navActive = false;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribirse a los cambios de autenticación
    this.authService.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });

    // Comprobar el estado de autenticación al cargar el componente
    this.authService.checkAuthentication();
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end',
      });
    }
  }

  toggleNav() {
    this.navActive = !this.navActive;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.logout();
    //this.isAuthenticated = false; // Cambiar el estado de autenticación
    this.router.navigate(['/login']); // Redirigir a la página de login
  }

  login(){
    this.authService.login;
  }
}
