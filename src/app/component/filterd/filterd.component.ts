import { Component,Renderer2, AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filterd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filterd.component.html',
  styleUrl: './filterd.component.css'
})
export class FilterdComponent {
  combinedItems: any[] = [];
  filteredItems: any[] = [];
  pageItems: any[] = [];
  presentPage: number = 1;
  numberofItems: number = 15;
  filterType: string = 'all';

  @ViewChild('hiddenDiv') hiddenDiv!: ElementRef;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch initial data and shuffle it
    this.combinedItems = [
      ...this.dataService.getKidsItems(),
      ...this.dataService.getMenItems(),
      ...this.dataService.getWomenItems()
    ];
    this.shuffleArray(this.combinedItems);

    // Subscribe to query params to get filter type
    this.route.queryParams.subscribe(params => {
      this.filterType = params['filterType'] || 'all';
      this.applyFilter();
    });
  }

  ngAfterViewInit(): void {
    // Initial filter and pagination setup
    this.applyFilter();
  }

  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.numberofItems);
  }

  updateFilPaginatedItems(): void {
    const startIndex = (this.presentPage - 1) * this.numberofItems;
    const endIndex = startIndex + this.numberofItems;
    this.pageItems = this.filteredItems.slice(startIndex, endIndex); // use pageItems to display paginated items
  }

  applyFilter(): void {
    if (this.filterType === 'all') {
      this.filteredItems = this.combinedItems;
    } else {
      this.filteredItems = this.combinedItems.filter(item => item.type === this.filterType);
    }
    this.updateFilPaginatedItems();
  }

  changePage(page: number): void {
    this.presentPage = page;
    this.updateFilPaginatedItems();
  }

}
