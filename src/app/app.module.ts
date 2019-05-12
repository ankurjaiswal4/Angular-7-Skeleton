import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout-wrapper/header/header.component';
import { FooterComponent } from './layout-wrapper/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PageNotFound404Component,
    UnauthorisedComponent,
    AboutUsComponent,
    LayoutWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
