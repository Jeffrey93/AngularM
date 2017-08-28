import {Routes, RouterModule} from '@angular/router';
import {RequestFormComponent} from './forms/request-form/request-form.component'
import { AppComponent } from './app.component';

const ROUTES: Routes=[
    {
        path: 'Home',
        component: AppComponent
      },
      {
        path: 'frmRequest',
        component: RequestFormComponent,
        data: { title: 'Heroes List' }
      },
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES);