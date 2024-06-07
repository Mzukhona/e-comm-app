import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdComponent } from './filterd.component';

describe('FilterdComponent', () => {
  let component: FilterdComponent;
  let fixture: ComponentFixture<FilterdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
