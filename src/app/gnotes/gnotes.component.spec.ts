import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnotesComponent } from './gnotes.component';

describe('GnotesComponent', () => {
  let component: GnotesComponent;
  let fixture: ComponentFixture<GnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
