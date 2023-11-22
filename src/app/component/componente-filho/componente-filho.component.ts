import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.scss'
})
export class ComponenteFilhoComponent {


  @Output() AlterarValor = new EventEmitter()

  HandleClick() {
    this.AlterarValor.emit()
  }

}
