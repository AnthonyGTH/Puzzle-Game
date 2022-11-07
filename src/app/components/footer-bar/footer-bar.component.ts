import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'footerBar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
})
export class FooterBarComponent {

  @Output() button2: EventEmitter<number> = new EventEmitter();
  @Output() button3: EventEmitter<number> = new EventEmitter();
  @Output() button4: EventEmitter<number> = new EventEmitter();
  @Output() button5: EventEmitter<number> = new EventEmitter();

  constructor(public navCtrl: NavController) {
    this.buttonReset();
  }

  buttonReset() {
    this.buttonFooter(0);
  }

  buttonFooter(buttomPress) {
      switch (buttomPress) {
        case 1:
          this.navCtrl.navigateRoot('/');
          this.buttonReset();
          break;
        case 2:
          this.button2.emit ( 1 );
          break;
        case 3:
          this.button3.emit ( 1 );
          break;
        case 4:
          this.button4.emit ( 1 );
          break;
        case 5:
          window.location.reload();
          break;
      }
    }
}
