import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlineComponent } from './verline.component';

describe('VerlineComponent', () => {
  let component: VerlineComponent;
  let fixture: ComponentFixture<VerlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerlineComponent]
    });
    fixture = TestBed.createComponent(VerlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
