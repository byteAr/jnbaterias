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
  isVisible = true;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.isVisible = false; // Se desvanece la imagen actual

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.isVisible = true; // Se muestra la nueva imagen con transición
      }, 200); // Tiempo de animación de salida
    }, 3000); // Tiempo total de visualización de cada imagen
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }



}
