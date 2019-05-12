import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { AuthGuard } from './core/authentication/auth.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutUsComponent },

    ],
    component: LayoutWrapperComponent,
    canActivate: [AuthGuard]
  },
  { path: 'unauthorized', component: UnauthorisedComponent },
  { path: '**', component: PageNotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
