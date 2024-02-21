import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsFormComponent } from './hogwarts-form.component';

describe('HogwartsFormComponent', () => {
  let component: HogwartsFormComponent;
  let fixture: ComponentFixture<HogwartsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogwartsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HogwartsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
