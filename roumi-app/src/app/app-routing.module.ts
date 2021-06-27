import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { RoomieFinderComponent } from './views/roomie-finder/roomie-finder.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { PublishComponent } from './views/publish/publish.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'finder', component: RoomieFinderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: UserHomeComponent },
  { path: 'publish', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
