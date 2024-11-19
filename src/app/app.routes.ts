import { Routes } from '@angular/router';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path:'listado-recetas', component:ListadoRecetasComponent},
    {path:'formulario', component:FormularioComponent}
];
