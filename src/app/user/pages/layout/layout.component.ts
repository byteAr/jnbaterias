import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { HeaderComponent } from "../../../shared/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
