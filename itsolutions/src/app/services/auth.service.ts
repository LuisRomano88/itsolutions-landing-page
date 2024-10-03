import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://fakestoreapi.com/auth/login';

constructor(private http: HttpClient, private router: Router) { }

// Función para realizar la solicitud de login
/*login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  const body = JSON.stringify({
    email: email,
    password: password
  });

  return this.http.post(this.apiUrl, body, { headers });
}*/

login(username: string, password: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  const body = JSON.stringify({
    email: username,
    password: password
  });

  return this.http.post(this.apiUrl, { username, password });
}

// Guardar el token en el localStorage
setToken(token: string): void {
  localStorage.setItem('token', token);
}

// Obtener el token desde el localStorage
getToken(): string | null {
  return localStorage.getItem('token');
}

// Remover el token al cerrar sesión
logout(): void {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}

// Verificar si el usuario está autenticado
isAuthenticated(): boolean {
  return !!this.getToken();
}


}
