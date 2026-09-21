import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'code',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Responsive Web Design',
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: 'tools',
      skills: [
        'Git',
        'GitHub',
        'REST APIs',
        'JSON',
        'VS Code',
        'Antigravity',
      ],
    },
    {
      title: 'Currently Learning',
      icon: 'learning',
      skills: [
        'Advanced Angular',
        'Backend Integration',
        'AI Integration',
        'Deployment & Cloud Platforms',
      ],
    },
  ];
}
