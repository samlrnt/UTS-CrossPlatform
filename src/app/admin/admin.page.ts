import { Modal1Component } from './components/modal1/modal1.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { IonItemSliding, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];
  constructor(
    private homeService: HomeService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) {}

  ngOnInit() {
    this.items = this.homeService.GetAllItem();
  }

  updateItemSlide(item: Item, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log("Updated!!");
    this.presentModal();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: Modal1Component,
    });

    return await modal.present();
  }

  async presentAlert(item: Item, slidingItem: IonItemSliding){
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Are you Sure?',
      subHeader: item.brand,
      message: 'Do you really want to delete this Item?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            console.log("Confirm");
            this.homeService.removeItem(item);
            console.log(this.homeService.GetAllItem());
          }
        }]
    });
    await alert.present();
    alert.onDidDismiss().then(() => this.items = this.homeService.GetAllItem())
  }

}
