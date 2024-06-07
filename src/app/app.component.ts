import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WomenComponent } from './component/women/women.component';
import { MenComponent } from './component/men/men.component';
import { AboutComponent } from './component/about/about.component';
import { KidsComponent } from './component/kids/kids.component';
import { FilterdComponent } from './component/filterd/filterd.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule, // Import RouterModule
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WomenComponent,
    MenComponent,
    AboutComponent,
    KidsComponent,
    FilterdComponent
 
    ] // Import the HeaderComponent
})
export class AppComponent { }
