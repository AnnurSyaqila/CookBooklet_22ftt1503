import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cranberry',
  templateUrl: './cranberry.page.html',
  styleUrls: ['./cranberry.page.scss'],
})
export class CranberryPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }
}
