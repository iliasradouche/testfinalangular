import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MainService } from './services/main.service';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './layouts/auth-layout/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    PagesLayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
          deps: [HttpClient]
      }
    }),
    NgSelectModule,
    AuthModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    MainService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
