import { Component, inject, OnInit } from '@angular/core';
import { RecetaServService } from '../servicios/receta-serv.service';
import { Recetas } from '../modelos/recetas';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-recetas',
  standalone: true,
  imports: [],
  templateUrl: './listado-recetas.component.html',
  styleUrl: './listado-recetas.component.css'
})
export class ListadoRecetasComponent implements OnInit{

  //injectas el servicio
   recetasSvc = inject(RecetaServService);

   //creas un array de arrays con el servicio
   recetas : Recetas[] = [];

   //usas el metodo
   ngOnInit(){
       this.recetas = this.recetasSvc.devolverReceta();
   }
   

      
   
   
}
