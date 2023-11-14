import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
  //importo a classe Input depois declaro as variaveis filho
  // utilizando o ! eu prometo a variavel que ela ira receber um valor
  @Input() nome!: string 
  @Input() idade!: number 
  @Input() profissao!: string 
  @Input() cidade!: string 
}
