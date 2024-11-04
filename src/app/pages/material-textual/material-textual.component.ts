import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import{ContentModalComponent} from '../../components/content-modal/content-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-material-textual',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,ContentModalComponent, MatDialogModule],
  templateUrl: './material-textual.component.html',
  styleUrl: './material-textual.component.css'
})
export class MaterialTextualComponent {
  @Input() numeroMateria:number = 0;
  constructor(private dialog: MatDialog) { }

  openModal(content: string, numero: number): void {
    this.dialog.open(ContentModalComponent, {
      data: { 
        content: content,
        numero_container: numero 
      },
      width: '80vw',
      maxWidth: '80vw',
      panelClass: 'custom-modal-panel'  // Classe personalizada para o tema
    });
  }

}
