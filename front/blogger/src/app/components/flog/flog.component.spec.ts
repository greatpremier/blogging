import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlogComponent } from './flog.component';

describe('FlogComponent', () => {
  let component: FlogComponent;
  let fixture: ComponentFixture<FlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
