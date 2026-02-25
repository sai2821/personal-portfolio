import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'COMVIVA Pvt Ltd',
      role: 'SDE - Senior Frontend Developer',
      period: 'Jun 2024 - Present',
      location: 'Bhubaneswar, India',
      description: 'Leading frontend development for consumer-facing transaction modules and notification systems.',
      achievements: [
        'Developed consumer transactions module including unregistered transfer recharge, improving user accessibility',
        'Built notification management module to streamline user alerts and enhance engagement',
        'Implemented comma-separated functionality for improved data parsing and user input handling'
      ],
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS']
    },
    {
      company: 'COMVIVA Pvt Ltd',
      role: 'SDE - Product Developer',
      period: 'Aug 2022 - Jun 2024',
      location: 'Bhubaneswar, India',
      description: 'Engineered Mobiquity Pay Admin web portal optimizing financial transactions across 60+ global deployments.',
      achievements: [
        'Built Admin portal features: Transfer Control Profile, Transfer Rules, QR Code Generator using Angular 14',
        'Crafted reusable components (Shared Table with Pagination, Review & Confirm Popups, JSON-Based Forms) reducing team workload by 60%',
        'Enhanced security by resolving SAST & SonarQube issues, reducing vulnerabilities from 60% to under 20%',
        'Collaborated with PMG, POs, and UX designers achieving 25% boost in customer satisfaction'
      ],
      technologies: ['Angular 14', 'TypeScript', 'Tailwind CSS', 'RxJS', 'SonarQube']
    },
    {
      company: 'COMVIVA Pvt Ltd',
      role: 'SDE - Product Developer Intern',
      period: 'Jan 2022 - Jul 2022',
      location: 'Bhubaneswar, India',
      description: 'Started career optimizing frontend components and implementing responsive UI solutions.',
      achievements: [
        'Optimized components resulting in 10% reduction in product release time',
        'Implemented static, responsive components achieving 20% reduction in delivery time',
        'Executed comprehensive feature testing for 15+ standalone components',
        'Gained proficiency in Angular and React for developing responsive user interfaces'
      ],
      technologies: ['Angular', 'React', 'HTML5', 'CSS3', 'JavaScript']
    }
  ];
}
