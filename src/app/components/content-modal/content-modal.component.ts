import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {conteudoTextual} from '../../data/conteudo_textual';
import {Material} from '../../interface/material_textual.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './content-modal.component.html',
  styleUrl: './content-modal.component.css'
})
export class ContentModalComponent implements OnInit {
  title:string = '';
  numero_conteudo: number = 0;
  
  conteudo_Modal:Material[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string, numero_container:number }, private dialogRef: MatDialogRef<ContentModalComponent>, private sanitizer: DomSanitizer) {
    this.title = data.content;
    this.numero_conteudo = data.numero_container;
  }
  
  ngOnInit(): void {
    const encontrarPorId = (id: number) => {
      return conteudoTextual.find(item => item.id === id);
    };
    
    this.conteudo_Modal = encontrarPorId(this.numero_conteudo)?.material || [];
    console.log(this.conteudo_Modal)
  }

  getSanitizedHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  close(): void {
    this.dialogRef.close();
  }

  downloadFile(url_arquivo: string) {
    const fileUrl = url_arquivo;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    
    link.download = url_arquivo;
    
    link.click();
  }
}
