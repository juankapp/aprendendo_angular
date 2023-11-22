import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.scss'
})
export class ComponentePaiComponent {

  numero: number = 0
  
  onAlterarValor() {
    this.numero = this.numero + 1


  }
}
