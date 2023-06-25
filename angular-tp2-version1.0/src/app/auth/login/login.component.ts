import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = 'eve.holt@reqres.in';
  password: string = 'cityslicka';

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const url = 'https://reqres.in/api/login';
    const body = { email: this.email, password: this.password };
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.post(url, body, httpOptions).subscribe(
      (response: any) => {
        console.log('Authentication successful');
        console.log('Token:', response.token);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/admin']);
      },
      (error: any) => {
        console.log('Authentication failed');
        console.log('Error:', error);
      }
    );
  
    this.email = '';
    this.password = '';
  }
  
}
