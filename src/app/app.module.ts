import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './component/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './component/segundo-componente/segundo-componente.component';
import { NomeComponenteComponent } from './component/nome-componente/nome-componente.component';
import { CardComponentComponent } from './component/card-component/card-component.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { RenderizacaoCondicionalComponent } from './component/renderizacao-condicional/renderizacao-condicional.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { ComponentePaiComponent } from './component/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './component/componente-filho/componente-filho.component';
import { RenderizarListaComponent } from './component/renderizar-lista/renderizar-lista.component';
import { FormularioComponent } from './component/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    NomeComponenteComponent,
    CardComponentComponent,
    DirectivesComponent,
    RenderizacaoCondicionalComponent,
    EventosComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    RenderizarListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
