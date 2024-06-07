import { Component, Renderer2, AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { KidsComponent } from '../kids/kids.component';
import { WomenComponent } from '../women/women.component';
import { MenComponent } from '../men/men.component';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { FilterdComponent } from '../filterd/filterd.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [KidsComponent,MenComponent,WomenComponent,CommonModule,FilterdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  AfterViewInit{

  combinedItems: any[] = [];
  pageItems: any[] = [];
  presentPage: number =1;
  numberofItems: number = 15;
  filterType: string | null = null;
  constructor(private dataService: DataService,private router:Router) {}

  ngAfterViewInit(): void {
    const kidsItems = this.dataService.getKidsItems();
    const menItems = this.dataService.getMenItems();
    const womenItems = this.dataService.getWomenItems();

    this.combinedItems = [...kidsItems, ...menItems, ...womenItems];
    this.shuffleArray(this.combinedItems);
    this.updatePaginatedItems();
  }

  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  updatePaginatedItems(): void {
    const startIndex = (this.presentPage - 1) * this.numberofItems;
    const endIndex = startIndex + this.numberofItems;
    this.pageItems = this.combinedItems.slice(startIndex, endIndex);

  }
  changePage(page: number): void {
    this.presentPage = page;
    this.updatePaginatedItems();
  }
  totalPages(): number {
    return Math.ceil(this.combinedItems.length / this.numberofItems);
  }

  goToFilterd(filterType: string)
  {
    this.router.navigate(['/filter'], { queryParams: { filterType }, skipLocationChange: true })

  }

}
