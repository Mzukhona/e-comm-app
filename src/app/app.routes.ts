import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WomenComponent } from './component/women/women.component';
import { MenComponent } from './component/men/men.component';
import { AboutComponent } from './component/about/about.component';
import { KidsComponent } from './component/kids/kids.component';
import { FilterdComponent } from './component/filterd/filterd.component';

export const routes: Routes = [

  { path : '', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'women',  component:WomenComponent},
  { path : 'men',  component:MenComponent},
  { path : 'kids',  component:KidsComponent},
  { path : 'filter',  component:FilterdComponent}
];
