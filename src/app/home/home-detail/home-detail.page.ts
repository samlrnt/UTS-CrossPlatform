import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../home.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  loadedItem: Item;
  detailsKey ;
  detailsValue ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('itemId')){ return; }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.homeService.getItem(itemId);
      this.detailsKey = this.homeService.getDetailsKey(this.loadedItem.type);
      this.detailsValue = this.loadedItem.details;
    });
  }

}
