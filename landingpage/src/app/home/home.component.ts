import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
