import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  //ngStyle eu posso definir por meio de variaveis os estilos do css
    tamanhoFonte: number = 20;
    corFonte: string = 'red';
    familyFonte: string = 'calibri';

    //ngClass eu posso definir o nome da classe por meio de variaveis, array
    classes = ['h2-pequeno', 'h2-grande'];

    underline = 'underline_decoration';
}
