import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPlanRecommendationComponent } from './medical-plan-recommendation.component';

describe('MedicalPlanRecommendationComponent', () => {
  let component: MedicalPlanRecommendationComponent;
  let fixture: ComponentFixture<MedicalPlanRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalPlanRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalPlanRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
