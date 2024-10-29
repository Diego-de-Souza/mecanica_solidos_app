import { Component, Inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-content-exercicios',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './content-exercicios.component.html',
  styleUrl: './content-exercicios.component.css'
})
export class ContentExerciciosComponent {
  title: string = '';
  selectedAnswer: string = '';
  correctAnswer: string = 'B';
  feedbackClass: { [key: string]: string } = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string }) {
    this.title = data.content;
    console.log(this.title)
  }

  submitAnswer(): void {
    this.feedbackClass = {
      A: '',
      B: '',
      C: '',
      D: ''
    };
    const respostaElemento = document.getElementById('resposta');
    if(respostaElemento){
      respostaElemento.style.display = 'Flex';
    }

    if (this.selectedAnswer) {
      
      if (this.selectedAnswer === this.correctAnswer) {
        this.feedbackClass[this.selectedAnswer] = 'success';
      } else {
        this.feedbackClass[this.selectedAnswer] = 'error';
        this.feedbackClass[this.correctAnswer] = 'success';
      }
    } else {
      console.log("Por favor, selecione uma resposta.");
    }
  }

  getOptionClass(option: string): string {
    return this.feedbackClass[option] || '';
  }
}
