import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { RoomieFinderComponent } from './views/roomie-finder/roomie-finder.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { PublishComponent } from './views/publish/publish.component';
import { AuthenticatorGuard } from './guards/authenticator.guard';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'finder', component: RoomieFinderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticatorGuard] },
  { path: 'dashboard', component: UserHomeComponent, canActivate: [AuthenticatorGuard] },
  { path: 'publish', component: PublishComponent, canActivate: [AuthenticatorGuard] }
];

export function tokenGetter() { return localStorage.getItem('token') }

const JWTModOpts: JwtModuleOptions = { config: { tokenGetter: tokenGetter }};

@NgModule({
  imports: [RouterModule.forRoot(routes),
            JwtModule.forRoot(JWTModOpts),
            HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
