import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FartComponent } from './fart.component';

describe('FartComponent', () => {
  let component: FartComponent;
  let fixture: ComponentFixture<FartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
