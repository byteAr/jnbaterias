import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {


  images = [
    'bateriamoura.png',
    'bateriabosch.png',
    'bateriavarta.png',
    'bateriachampion.png',
  ];
  currentIndex = 0;
  currentImage: string | null = this.images[this.currentIndex];
  isVisible = true;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.isVisible = false; // Aplica la animación de salida

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentIndex];
        this.isVisible = true; // Aplica la animación de entrada
      }, 1000); // Tiempo de salida
    }, 4000); // Tiempo total de visualización por imagen
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }



}
