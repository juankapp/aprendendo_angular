import { Component } from '@angular/core';
import { Celulares } from '../../Interfaces/Celulares';

@Component({
  selector: 'app-renderizar-lista',
  templateUrl: './renderizar-lista.component.html',
  styleUrl: './renderizar-lista.component.scss'
})
export class RenderizarListaComponent {

  

  Celulares: Celulares[] = [
    {
      Marca: 'Samsung ',
      Modelo: 'S9 Plus',
      ano_Fabricacao: 2018
    } , 
    
    {
      Marca: 'Xiaomi',
      Modelo: 'Redmi Note 12',
      ano_Fabricacao: 2020
    } , 

    {
      Marca: 'Motorola',
      Modelo: 'G8 Play',
      ano_Fabricacao: 2021
    }

  ]

  DetalhesCelular: string = ''

  InformacaoCelular(celular: Celulares) {
    this.DetalhesCelular = `A marca do celular é ${celular.Marca} tem o modelo ${celular.Modelo} e foi fabricado em ${celular.ano_Fabricacao} `
  }

}
