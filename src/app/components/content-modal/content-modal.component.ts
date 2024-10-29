import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-content-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './content-modal.component.html',
  styleUrl: './content-modal.component.css'
})
export class ContentModalComponent {
  title:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string }, private dialogRef: MatDialogRef<ContentModalComponent>) {
    this.title = data.content;
  }
  
  
  close(): void {
    this.dialogRef.close();
  }
}
