import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  scanText: string;

  constructor(private navCtrl: NavController) {

  }

  scan() {

    this.scanText = "Scaning...";

    BarcodeScanner.scan().then((barcodeData) => {
      this.scanText = "Scan Finished";
    }, (err) => {
      this.scanText = "Scan error: " + err;
    });
  }
}
