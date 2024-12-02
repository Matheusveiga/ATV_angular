import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-corrosel-prop',  // Alterado para evitar conflito
  templateUrl: './carrocel-prop.component.html',  // Alterado
  styleUrls: ['./carrocel-prop.component.css']  // Alterado
})
export class CorroselPropComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  images = [
    'https://via.placeholder.com/1500x500/FF5733/FFFFFF?text=Imagem+1',
    'https://via.placeholder.com/1500x500/33FF57/FFFFFF?text=Imagem+2',
    'https://via.placeholder.com/1500x500/3357FF/FFFFFF?text=Imagem+3'
  ];

  private intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }
}
