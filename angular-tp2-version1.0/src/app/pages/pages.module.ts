import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UsersModule,
    TranslateModule
  ]
})
export class PagesModule { }
