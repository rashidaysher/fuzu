import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(userData:any ): Observable <any> {
    return this.http.post('https://machachari.herokuapp.com/account/login/', userData);
  } 
  
}
