import { HostBinding, HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  navActive = false;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Verificar si el token está presente en el localStorage para determinar si el usuario está autenticado
    this.isAuthenticated = !!localStorage.getItem('token');
  }


  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
    }
  }

 

  toggleNav() {
    this.navActive = !this.navActive;
  }

  logout():void{
    localStorage.removeItem('token');
    this.isAuthenticated = false; // Cambiar el estado de autenticación
    this.router.navigate(['/login']); // Redirigir a la página de login
  }
  
}
