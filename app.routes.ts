import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { MedicalPlanComponent } from './medical-plan/medical-plan.component';



export const routes: Routes = [
    {path:'About',component:AboutComponent},
    // {path:'Home',component:HomeComponent},
    // {path:'FAQs',component:FAQComponent},
    // {path:'View Glossary',component:GlossaryComponent},
    // {path:'View Medical Plans',component:MedicalPlanComponent}
];
