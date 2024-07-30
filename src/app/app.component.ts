import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { PreLoaderService } from './services/pre-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  isLoading = this.preLoadService.isLoading$

  constructor(
     private router: Router,
     private preLoadService: PreLoaderService
     )
     {}

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.preLoadService.setLoadingState(true);
      } else if (event instanceof NavigationEnd){
        this.preLoadService.setLoadingState(false);
      }
    })
      
  }
}
