import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FartDialogMapComponent } from './fart-dialog-map.component';

describe('FartDialogMapComponent', () => {
  let component: FartDialogMapComponent;
  let fixture: ComponentFixture<FartDialogMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FartDialogMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FartDialogMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
