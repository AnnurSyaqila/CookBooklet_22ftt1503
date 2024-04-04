import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  showThanksgivingSubList: boolean = false;
  showChristmasSubList: boolean = false;
  showFitriSubList: boolean = false;
  showRTurkeyRecipe: boolean = false;
  showCranberrySauceRecipe: boolean = false;
  showCookiesRecipe: boolean = false;
  showBeefRecipe: boolean = false;
  showKetuPatRecipe: boolean = false;
  showWajidRecipe: boolean = false;

  toggleThanksgivingSubList() {
    this.showThanksgivingSubList = !this.showThanksgivingSubList;
  }

  toggleChristmasSubList() {
    this.showChristmasSubList = !this.showChristmasSubList;
  }

  toggleKetupatSubList() {
    this.showFitriSubList = !this.showFitriSubList;
  }

  toggleRTurkeyRecipe() {
    this.showRTurkeyRecipe = !this.showRTurkeyRecipe;
  }

  toggleCranberrySauceRecipe() {
    this.showCranberrySauceRecipe = !this.showCranberrySauceRecipe;
  }

  toggleCookiesRecipe() {
    this.showCookiesRecipe = !this.showCookiesRecipe;
  }

  toggleBeefRecipe() {
    this.showBeefRecipe = !this.showBeefRecipe;
  }

  toggleKetupatRecipe() {
    this.showKetuPatRecipe = !this.showKetuPatRecipe;
  }

  toggleWajidRecipe() {
    this.showWajidRecipe = !this.showWajidRecipe;
  }

  constructor(public alertController: AlertController) {}
  async showPrompt() {
    const alert = await this.alertController.create({
      header: 'Halloween',
      message: `
      Our apologies, but the recipe for this dish is currently under construction. 
      Please stay tuned for updates!
      `,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
