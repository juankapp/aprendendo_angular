import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  mostrarMensagem: boolean = false;

  ControleMensagem(): void {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

}
