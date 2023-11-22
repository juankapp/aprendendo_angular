import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizarListaComponent } from './renderizar-lista.component';

describe('RenderizarListaComponent', () => {
  let component: RenderizarListaComponent;
  let fixture: ComponentFixture<RenderizarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderizarListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderizarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
