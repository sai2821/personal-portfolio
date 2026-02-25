import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeFilter = signal<string>('all');

  categories = ['all', 'web'];

  projects: Project[] = [
    {
      title: 'Mobiquity Pay Admin Portal',
      description: 'Scalable admin portal for financial transaction management deployed across 60+ global instances in 45+ countries.',
      image: 'mobiquity',
      technologies: ['Angular 14', 'TypeScript', 'Tailwind CSS', 'RxJS'],
      category: 'web',
      githubUrl: 'https://github.com/sai2821',
      featured: true
    },
    {
      title: 'Consumer Transactions Module',
      description: 'Developed unregistered transfer recharge functionality improving user accessibility and transaction efficiency.',
      image: 'transactions',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'RxJS'],
      category: 'web',
      githubUrl: 'https://github.com/sai2821',
      featured: true
    },
    {
      title: 'Notification Management System',
      description: 'Built comprehensive notification module to streamline user alerts and enhance engagement across the platform.',
      image: 'notifications',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      githubUrl: 'https://github.com/sai2821',
      featured: true
    },
    {
      title: 'QR Code Generator',
      description: 'Implemented QR code generation feature for seamless payment integrations in the admin portal.',
      image: 'qrcode',
      technologies: ['Angular 14', 'TypeScript', 'Canvas API'],
      category: 'web',
      githubUrl: 'https://github.com/sai2821',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark mode, smooth animations, and fully responsive design.',
      image: 'portfolio',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'GSAP'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sai2821',
      featured: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter() === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter());
  }

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }
}
