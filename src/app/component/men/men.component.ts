
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit {
    items: any[] =[]

    constructor(private dataService: DataService){}

    ngOnInit(): void {
     this.items =   this.dataService.getMenItems();
    }

}
