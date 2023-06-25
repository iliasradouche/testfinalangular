import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserType } from 'src/app/types/users.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  public loading = true;
  public activePage: number = 0;
  public users: UserType[] = [];
  public totalPages = 1;

  constructor(public usersService: UsersService) {}

  getUsers(page: number = 1): void {
    if (page >= 1 && page <= this.totalPages && this.activePage !== page) {
      this.loading = true;
      this.users = [];
      this.activePage = page;
      const users$ = this.usersService.getUsers(page);
      lastValueFrom(users$).then(response => {
        this.users = response?.data;
        this.totalPages = response?.total_pages;
        this.loading = false;
      }).catch(error => {
        this.users = [];
        this.totalPages = 1;
        this.loading = false;
      });
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    
  }
}
