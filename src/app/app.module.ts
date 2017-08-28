import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RequestFormComponent } from './forms/src/app/forms/request-form/request-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
 /*
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SectionComponent,
    SidenavComponent,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    //habilitar modulo route
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterializeModule,
    //importar apikey para mapas
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcNmYmk-E19uEqsArE0CqQEkWE7VapnZ8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
