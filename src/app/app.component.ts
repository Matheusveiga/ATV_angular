import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule, NgFor } from '@angular/common';
import { BannercarroselComponent } from "./components/bannercarrosel/bannercarrosel.component";
import { ContainerCadastroComponent } from './components/container-cadastro/container-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, BannercarroselComponent, CommonModule, ContainerCadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ATV_Angular';
  
}

