import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //declaro as variaveis e os valores dela no componente pai
  userName: string = 'Juan'
  age: number = 20
  trabalho: string = 'programador'
  cidade: string = "Porto união"
  
  title = 'aprendendo_angular';
}
