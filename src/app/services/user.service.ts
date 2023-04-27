import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private myappUrl: string;
  private myApiUrl: string;
  
  
  constructor(private http: HttpClient) { 
    this.myappUrl = environment.endpoint;

    this.myApiUrl = '/api/users/'
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.myappUrl}${this.myApiUrl}/${id}`;
    return this.http.get<User>(url);
  }


}
