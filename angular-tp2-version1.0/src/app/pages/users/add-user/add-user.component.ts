import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  firstname: string = '';
  lastname: string ='';
  emailadress: string='';
  apiUrl: string = `${environment.apiLink}/users`;

  constructor(private http: HttpClient) { }

  addUser() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      emailadress: this.emailadress,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(this.apiUrl, user, httpOptions)
      .subscribe(
        (response: any) => {
          console.log('User added successfully:', response);
        },
        (error: any) => {
          console.log('Error adding user:', error);
        }
      );
  }
}
