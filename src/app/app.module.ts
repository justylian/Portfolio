import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogosComponent } from './logos/logos.component';
import { ScreensComponent } from './screens/screens.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
  @NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    LogosComponent,
    ScreensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
