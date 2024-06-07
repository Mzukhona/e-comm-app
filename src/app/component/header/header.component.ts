import { Component, ElementRef, ViewChild,HostListener } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('scrollableContent', { static: false })scrollableContent!: ElementRef;

  constructor(private router:Router){}
  @HostListener('window:scroll', [])

  onWindowScroll() {
    const header = document.querySelector('nav');
    if (header) {
      header.classList.toggle('scrolling', window.scrollY > 0);
    }
  }


  scrollleft()
  {
   const element = this.scrollableContent.nativeElement;
   element.scrollBy({ left: -100, behavior:'smooth'})
  }
  scrollright()
  {
   const element = this.scrollableContent.nativeElement;
   element.scrollBy({ left: 100, behavior:'smooth'})
  }
  navigateTo(route: string) {
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true
    };
    this.router.navigate([route], navigationExtras);
  }
  goToWomen()
  {
    this.navigateTo('/women');
  }
  goTokid()
  {
    this.navigateTo('/kids');

  }
  goTomen()
  {
    this.navigateTo('/men');

  }
  goHome()
  {
    this.navigateTo('/');
  }


}
