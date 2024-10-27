import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.css'
})
export class ExerciciosComponent {

}
