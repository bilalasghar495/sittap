import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { PreLoaderService } from './services/pre-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  constructor(
     private router: Router,
     private preLoadService: PreLoaderService
     )
     {}

  ngOnInit(): void {
      
  }
}
