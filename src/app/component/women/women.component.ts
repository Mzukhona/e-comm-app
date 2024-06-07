import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent implements OnInit {


  items : any[] =[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items =this.dataService.getWomenItems();
  }
  }


