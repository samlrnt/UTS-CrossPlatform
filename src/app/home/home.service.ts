import { Injectable } from '@angular/core';
import { Item } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private items: Item[] = [
    {
      id: 'item1',
      imageUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
      brand: 'AMD',
      model: 'RYZEN 5 3600',
      price: 2000000,
      stock: 3,
      type: 'cpu',
      details:[
        '3.6GHz',
        '4.2Ghz',
        '6',
        '12',
      ] 
    },
    {
      id: 'item2',
      imageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/Intel/Tiger_Lake/TGL_UP4_black.jpg',
      brand: 'Intel Core',
      model: 'i7-1160G7',
      price: 3000000,
      stock: 1,
      type: 'cpu',
      details:[
        '2.10GHz',
        '4.40Ghz',
        '4',
        '8',
      ]
    },
    {
      id: 'item3',
      imageUrl: 'http://www.asrock.com.tw/mb/photo/A320M(L1).png',
      brand: 'AMD',
      model: 'A320M',
      price: 1000000,
      stock : 8,
      type: 'motherboard',
      details:[
        'B350',
        'RyzenCPU',
      ]
    },
    {
      id: 'item4',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/9/6309602/6309602_5b87a390-ceff-4c13-bc13-64d942bf9f6c_1000_1000.jpg',
      brand: 'Kingston',
      model: 'DDR4',
      price: 453000,
      stock: 3,
      type: 'ram',
      details:[
        '2666MHz',
        '8GB',
      ]
    },
    {
      id: 'item5',
      imageUrl: 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png',
      brand: 'NVidia Geforce',
      model: 'RTX3080',
      price: 10000000,
      type: 'GPU',
      stock: 6,
      details:[]
    }
  ];

  constructor() { }

  GetAllItem(){
    return[...this.items];
  }

  getItem(ItemId: string){
    return{...this.items.find( item => {
      return item.id === ItemId;
    })}
  }

  getDetailsKey(type: string){
    switch(type){
      case "cpu":
        return(["Base Clock", "Boost Clock", "Total Core", "Total Thread"]);
        break;
      case "ram":
        return(["Speed", "Size"]);
        break;
      case "motherboard":
        return(["Chipset", "Compatible Processor"]);
        break;
      default:
        return[];
    }
  }

  removeItem(itemsId: Item){
    this.items.splice(this.items.findIndex(function(i){
      return i.id === itemsId.id;
    }), 1);
  }
}
