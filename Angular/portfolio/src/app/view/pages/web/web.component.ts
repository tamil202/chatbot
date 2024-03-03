import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css',
})
export class WebComponent {
  innerBody = {
    workPerform: '100%',
    work: 'work performed',
    learn: 'MEAN+',
    learPerform: 'Intermediate',
    communication: 'Communication',
    confidance: 'well',
    software: 'Software company tools',
    softwareKnown: {
      IDE: 'Vscode',
      Idx: `Integrated Development Environments`,
      idx: `IDE are comprehensive software applications that provide developers with a centralized workspace for writing, testing, and debugging code`,
      GIT: 'Git',
      Git: `Version Control Systems`,
      TEAM: 'Collaboration',
      Team: `Collaboration Tools`,
    },
  };
}
