import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'React.js', level: 50, icon: '⚛️' },
        { name: 'Angular Material', level: 90, icon: '🟣' },
        { name: 'RxJS', level: 85, icon: '🔄' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' }
      ]
    },
    {
      title: 'Core Technologies',
      skills: [
        { name: 'TypeScript', level: 95, icon: '📘' },
        { name: 'JavaScript', level: 90, icon: '💛' },
        { name: 'HTML5', level: 95, icon: '🔶' },
        { name: 'CSS3', level: 95, icon: '🎨' },
        { name: 'Bootstrap', level: 85, icon: '🅱️' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'REST APIs', level: 90, icon: '🔗' },
        { name: 'Postman', level: 85, icon: '📨' },
        { name: 'SonarQube', level: 80, icon: '🔍' },
        { name: 'UI Deployment', level: 85, icon: '🚀' }
      ]
    }
  ];
}
