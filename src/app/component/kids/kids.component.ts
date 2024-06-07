import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent implements OnInit{
  items: any [] =[];

  constructor(private dataservice:DataService){}

  ngOnInit(): void {

   this.items =   this.dataservice.getKidsItems();
  }

  filteredItems = this.items;


}
