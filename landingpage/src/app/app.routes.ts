import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';

export const routes: Routes = [


    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
    ,
    {
        path: 'sobre-mi',
        component: SobreMiComponent
    },
    {
        path: 'mis-proyectos',
        component: MisProyectosComponent

    }
];
