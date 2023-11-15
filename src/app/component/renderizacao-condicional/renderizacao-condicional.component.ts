import { Component } from '@angular/core';

@Component({
  selector: 'app-renderizacao-condicional',
  templateUrl: './renderizacao-condicional.component.html',
  styleUrl: './renderizacao-condicional.component.scss'
})
export class RenderizacaoCondicionalComponent {

  //*ngIf é como se fosse um if, caso o valor seja boolean  exibe 
  //pra utilizar o else, deve *ngIf="validacao else nãoValidado", assim é a sintaxe
  //depois cria uma tag  <ng-template #nãoValidado>, e coloca #nãoValidado, se referindo ao else 

  usuarioLogado: boolean = true;
  nomeUsuario: string = 'Juan';

  


}
