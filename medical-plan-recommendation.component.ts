import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Plan {
  name: string;
  description: string;
  features: string[];
  price: string;
}
@Component({
  selector: 'app-medical-plan-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-plan-recommendation.component.html',
  styleUrl: './medical-plan-recommendation.component.css'
})
export class MedicalPlanRecommendationComponent {
  plans: Plan[] = [
    {
      name: 'Lion Basic Coverage',
      description: 'Over the counter coverage for all members',
      features: [
        'Day-to-day limit with sublimits for GP and specialist consultations.',
        'life cover'
      ],
      price: 'R1500 pm'
    },
    {
      name: 'Rhino Classic',
      description: 'Cover for medical emergencies when traveling.',
      features: [
        'All hospitalization and day-to-day costs paid by the plan with 10 GP consultations.',
        '2 dentistry visits , one optometry visit and R 5,000 for medicines.',
        '2 dentistry visits , one optometry visit and R 5,000 for medicines.'
      ],
      price: 'R 4000' 
    },
    {
      name: 'Rhino Saver',
      description: 'Basic Affordable Medical Aid Plan.',
      features: [
        'All hospitalization and day-to-day costs paid by the plan.',
        'super saver'
      ],
      price: 'R3000 pm'
    }
    // Add more plans as needed
  ];
}