import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-wajid',
  templateUrl: './wajid.page.html',
  styleUrls: ['./wajid.page.scss'],
})
export class WajidPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
