import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

   
      
  }

  downloadCV(){
    const filePath = '../../../assets/Resume.pdf';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }



}
