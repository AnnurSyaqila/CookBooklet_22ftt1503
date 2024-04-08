import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-turkey',
  templateUrl: './turkey.page.html',
  styleUrls: ['./turkey.page.scss'],
})
export class TurkeyPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
