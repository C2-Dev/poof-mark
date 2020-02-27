import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FartDialogComponent } from './fart-dialog.component';

describe('FartDialogComponent', () => {
  let component: FartDialogComponent;
  let fixture: ComponentFixture<FartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
