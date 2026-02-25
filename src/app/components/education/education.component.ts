import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[] = [
    {
      institution: 'National Institute of Science and Technology',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      period: 'Aug 2018 - Jun 2022',
      gpa: '8.4/10',
      achievements: [
        'Specialized in Web Technologies and Software Development',
        'Completed projects in frontend development using Angular and React',
        'Active participant in technical events and coding competitions'
      ]
    }
  ];
}
