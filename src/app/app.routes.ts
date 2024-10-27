import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaterialTextualComponent } from './pages/material-textual/material-textual.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Mec solidos',
        component: HomeComponent
    },
    {
        path:'mtexto',
        title: 'Mec Material Textual',
        component: MaterialTextualComponent
    },
    {
        path:'exes',
        title: 'Exercicios Mec Solidos',
        component: ExerciciosComponent
    },
    {
        path: 'galeria',
        title: 'Galeria Mec Solidos',
        component: GaleriaComponent
    }
];
