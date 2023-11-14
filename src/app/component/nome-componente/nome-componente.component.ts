import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.scss'
})
export class NomeComponenteComponent {
  nome: string = 'Juan'
  idade: number = 19
  trabalha: boolean = true

}
