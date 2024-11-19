import { Component, inject } from '@angular/core';
import { RecetaServService } from '../servicios/receta-serv.service';
import { Recetas } from '../modelos/recetas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  recetaSvc = inject(RecetaServService);

  recetas : Recetas = {
    nombre: '',
    ingredientes: '',
    urlFoto:'',
    pasosReceta:''






  };

  aniadirReceta(){
   this.recetaSvc.addReceta(this.recetas);
  }
}
