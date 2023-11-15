import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './component/primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './component/segundo-componente/segundo-componente.component';
import { NomeComponenteComponent } from './component/nome-componente/nome-componente.component';
import { CardComponentComponent } from './component/card-component/card-component.component';
import { DirectivesComponent } from './component/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    NomeComponenteComponent,
    CardComponentComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
