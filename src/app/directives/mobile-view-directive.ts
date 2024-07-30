import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileMenu]'
})
export class MobileMenuDirective {

  constructor() { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const toggleButton = document.querySelector('.s-header__menu-toggle');
    const mainNavWrap = document.querySelector('.s-header__nav');
    const siteBody = document.querySelector('body');

    if (!(toggleButton && mainNavWrap && siteBody)) return; // Added null check for siteBody

    if ((event.target as HTMLElement).closest('.s-header__menu-toggle')) {
      event.preventDefault();
      toggleButton.classList.toggle('is-clicked');
      siteBody.classList.toggle('menu-is-open');
    } else if ((event.target as HTMLElement).closest('.s-header__nav a')) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        toggleButton.classList.toggle('is-clicked');
        siteBody.classList.toggle('menu-is-open');
      }
    } else if (toggleButton.classList.contains('is-clicked')) { // Toggle the menu if X icon is clicked
      toggleButton.classList.remove('is-clicked');
      siteBody.classList.remove('menu-is-open');
    }
  }
}
