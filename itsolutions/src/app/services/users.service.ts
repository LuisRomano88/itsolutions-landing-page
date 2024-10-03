
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/User";

@Injectable({
  providedIn: "root",
})
export class UsersService {

  private apiUrl = 'https://fakestoreapi.com/users';
  private user: User[] = [];

  constructor(private http: HttpClient) {}

    // Método para registrar un usuario
    register(user: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, user);
    }
  
    // Método para almacenar el token en localStorage
    setToken(token: string): void {
      localStorage.setItem('token', token);
    }

    // Metodo para mostrar los usuarios registrados
    getUsers(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}