import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-bannercarrosel',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './bannercarrosel.component.html',
  styleUrls: ['./bannercarrosel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('in => out', [
        style({ left: '100%' }),
        animate('1s ease-in', style({ left: '0%' }))
      ]),
      transition('out => in', [
        style({ left: '-100%' }),
        animate('1s ease-out', style({ left: '100%' }))
      ])
    ])
  ]
})
export class BannercarroselComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/800x300/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/800x300/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/800x300/3357FF/FFFFFF?text=Image+3'
  ];
  currentIndex: number = 0;
  intervalTime: number = 5000;  // Intervalo de troca de imagens em milissegundos.

  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
    }, this.intervalTime);
  }

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
