import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[];
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.items = this.homeService.GetAllItem();
  }
}
