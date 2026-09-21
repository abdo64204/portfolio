import { Component } from '@angular/core';

interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'LubriExpert AI',
      category: 'AI Chatbot',
      description:
        'An AI-powered chatbot designed to provide information about automotive and industrial lubricants, oils, greases, and lubrication applications.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'AI API'],
      liveUrl: 'https://partical-chf4ut5hi-bodi2.vercel.app/chat',
      githubUrl: 'https://github.com/abdo64204/lubriexpert-ai',
    },
    {
      name: 'Weather Website',
      category: 'Weather Application',
      description:
        'A responsive weather application that allows users to check weather information through a simple and user-friendly interface.',
      technologies: ['Angular', 'TypeScript', 'API Integration', 'HTML', 'SCSS'],
      liveUrl: 'https://partical-h41bk3v40-bodi2.vercel.app/',
    },
    {
      name: 'E-Commerce Website',
      category: 'E-Commerce',
      description:
        'A modern e-commerce application built with Angular, featuring product browsing, product cards, filtering, navigation, and shopping-cart functionality.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'REST API'],
      status: 'Currently in Development',
    },
  ];
}
