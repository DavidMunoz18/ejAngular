import { Injectable } from '@angular/core';
import { Recetas } from '../modelos/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetaServService {

  constructor() { }

  private recetas : Recetas[] = [];

  addReceta(recetas: Recetas){

    this.recetas.push(recetas);
  }

  devolverReceta(){
    return this.recetas;
  }

  
}
