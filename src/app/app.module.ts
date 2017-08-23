import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcNmYmk-E19uEqsArE0CqQEkWE7VapnZ8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
