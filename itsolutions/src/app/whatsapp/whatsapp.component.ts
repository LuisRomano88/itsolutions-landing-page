

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {

  abrirWhatsApp() {
    window.open('http://wa.me/+542615742162', '_blank');
  }

}

