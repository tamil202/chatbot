import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ViewService } from '../../service/view.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ViewsComponent {
  constructor(private http: HttpClient, private viewService: ViewService) {}
  innerBody = {
    img: '../../../../assets/contact.png',
    heading: 'Who Am I?',
    aboutMe: `Hi I'm Jack Smith. Click here to add your own text and edit me. ​Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    known: {
      dev: 'Web Developer',
      softwares: 'vscode',
      versionControl: 'Git',
      remoteAccess: 'GitHub',
      Lang: 'Angular 17',
    },
    languageKnown: 'MEAN',
  };
  isOpen: boolean = false;
  onClick = () => {
    this.isOpen = !this.isOpen;
  };
  userinpData: string = '';
  // data send to server
  addonData: any = [];
  useraddonData: any = [];

  // isSend = () => {
  //   let data = {
  //     inp: this.userinpData,
  //   };
  //   this.http.post('http://localhost:3000/chat', data).subscribe({
  //     next: (data: any) => {
  //       this.useraddonData.push(this.userinpData);
  //       this.addonData.push(data.message);
  //       console.log(this.addonData);

  //       this.userinpData = '';
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //     complete: () => {
  //       console.log(`fetch complated`);
  //     },
  //   });
  // };

  onSendData(): void {
    try {
      let params: Object = {
        input: this.userinpData,
      };
      this.useraddonData.push(this.userinpData);
      this.viewService.sendData(params).subscribe((response: any) => {
        if (response) {
          this.addonData.push(response.message);
          console.log('onSendData::', this.addonData);
          this.userinpData = '';
        }
      });
    } catch (error) {}
  }
}
