import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LayoutComponent } from './layout/layout.component';
import {HttpModule} from '@angular/http';
import { BlogService } from './blog.service';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WriteComponent } from './write/write.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouritesComponent,
    LayoutComponent,
    LoginComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  exports: [ RouterModule],
  providers: [BlogService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
