import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ketupat',
  templateUrl: './ketupat.page.html',
  styleUrls: ['./ketupat.page.scss'],
})
export class KetupatPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
