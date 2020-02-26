import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUtlisateurComponent } from './ajouter-utlisateur.component';

describe('AjouterUtlisateurComponent', () => {
  let component: AjouterUtlisateurComponent;
  let fixture: ComponentFixture<AjouterUtlisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUtlisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUtlisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
