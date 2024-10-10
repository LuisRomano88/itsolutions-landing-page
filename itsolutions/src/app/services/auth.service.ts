import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


private apiUrl = 'https://fakestoreapi.com/auth/login';
private apiRegister = 'https://fakestoreapi.com/users'

//Usamos BehaviorSubject para que los componentes puedan reaccionar a los cambios de autenticación
private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
// Observable que notifica los cambios 
isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); 

constructor(private http: HttpClient, private router: Router) { }

// Función para realizar la solicitud de login
login(username: string, password: string) : Observable<any>{
  
  this.isAuthenticatedSubject.next(true);
  //localStorage para persistir el estado
    localStorage.setItem('isAuthenticated', 'true'); 
  
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const body = JSON.stringify({
    username: username,
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
  
  this.isAuthenticatedSubject.next(false);
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  
}

// Verificar si el usuario está autenticado
isAuthenticated(): boolean {
  return !!this.getToken();
}

    // Método para verificar si el usuario está autenticado (basado en el localStorage)
    checkAuthentication() {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      this.isAuthenticatedSubject.next(authStatus);
    }


// Función para realizar la solicitud de registro
registerUser(userData: any): Observable<any> {

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<any>(this.apiRegister, JSON.stringify(userData), { headers });
}

}
