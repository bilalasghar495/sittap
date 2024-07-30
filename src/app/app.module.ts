import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { MobileMenuDirective } from './directives/mobile-view-directive';
import { PreLoaderService } from './services/pre-loader.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MobileMenuDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MobileMenuDirective,
  ],
  providers: [
    PreLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
