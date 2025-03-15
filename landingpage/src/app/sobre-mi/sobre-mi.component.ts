import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sobre-mi',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

}
