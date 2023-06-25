import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpUsersListResponse } from '../types/users.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public perPage = 6;

  constructor(protected http: HttpClient) { }

  getUsers(page: number): Observable<HttpUsersListResponse> {
    return (this.http.get(`${environment.apiLink}/users?delay=1&page=${page}&per_page=${this.perPage}`)) as Observable<HttpUsersListResponse>;
  }
}

