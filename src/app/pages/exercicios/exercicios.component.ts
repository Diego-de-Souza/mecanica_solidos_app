import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatDialogModule , MatDialog} from '@angular/material/dialog';
import {ContentExerciciosComponent} from '../../components/content-exercicios/content-exercicios.component';
import { ExerciciosPraticosComponent } from '../../components/exercicios-praticos/exercicios-praticos.component';
import { ContentExercicioParafusoComponent } from '../../components/content-exercicio-parafuso/content-exercicio-parafuso.component';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDialogModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.css'
})
export class ExerciciosComponent {
  @Input() numberModule: number = 0;
  
    constructor(private dialog: MatDialog){}

    openModalExercicio(value: string, numberQ: number): void {
      this.dialog.open(ContentExerciciosComponent, {
        data: { content: value, idContent: numberQ},
        width: '80vw',
        maxWidth: '80vw',
        panelClass: 'custom-modal-panel2'  // Classe personalizada para o tema
      });
    }

    openModalExercicioPratico(value: string, numberQ: number): void {
      this.dialog.open(ExerciciosPraticosComponent, {
        data: { content: value, idContent: numberQ},
        width: '80vw',
        maxWidth: '80vw',
        panelClass: 'custom-modal-panel2'  // Classe personalizada para o tema
      });
    }

    openModalExercicioPratico2(value: string, numberQ: number): void {
      this.dialog.open(ContentExercicioParafusoComponent, {
        data: { content: value, idContent: numberQ},
        width: '80vw',
        maxWidth: '80vw',
        panelClass: 'custom-modal-panel2'  // Classe personalizada para o tema
      });
    }

}
