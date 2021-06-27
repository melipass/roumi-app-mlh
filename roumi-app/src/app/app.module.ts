import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './views/landing/landing.component';
import { UserHomeComponent } from './views/user-home/user-home.component';
import { RoomieFinderComponent } from './views/roomie-finder/roomie-finder.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AboutComponent } from './views/about/about.component';
import { LandingCarouselComponent } from './components/landing-carousel/landing-carousel.component';
import { PublishComponent } from './views/publish/publish.component';
import { PostingsComponent } from './components/postings/postings.component';
import { CallbackPipe } from './pipe/callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    UserHomeComponent,
    RoomieFinderComponent,
    ProfileComponent,
    AboutComponent,
    LandingCarouselComponent,
    PublishComponent,
    PostingsComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
