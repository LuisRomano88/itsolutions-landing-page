

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {

  abrirWhatsApp() {
    window.open('http://wa.me/+542615958789', '_blank');
  }

}

