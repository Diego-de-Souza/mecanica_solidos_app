import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-content-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './content-modal.component.html',
  styleUrl: './content-modal.component.css'
})
export class ContentModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string }) {
    
  }
  
}
