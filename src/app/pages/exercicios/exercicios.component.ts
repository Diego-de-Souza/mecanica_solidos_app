import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatDialogModule , MatDialog} from '@angular/material/dialog';
import {ContentExerciciosComponent} from '../../components/content-exercicios/content-exercicios.component'

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatDialogModule, ContentExerciciosComponent],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.css'
})
export class ExerciciosComponent {
    constructor(private dialog: MatDialog){}

    openModalExercicio(value: string): void {
      this.dialog.open(ContentExerciciosComponent, {
        data: { content: value },
        width: '80vw',
        maxWidth: '80vw',
        panelClass: 'custom-modal-panel2'  // Classe personalizada para o tema
      });
    }

}
