import { Component } from '@angular/core';

@Component({
  selector: 'app-renderizar-lista',
  templateUrl: './renderizar-lista.component.html',
  styleUrl: './renderizar-lista.component.scss'
})
export class RenderizarListaComponent {

  Celulares = [
    {
      Marca: 'Samsung ',
      Modelo: 'S9 Plus'
    } , 
    
    {
      Marca: 'Xiaomi',
      Modelo: 'Redmi Note 12'
    } , 

    {
      Marca: 'Motorola',
      Modelo: 'G8 Play'
    }

  ]

}
