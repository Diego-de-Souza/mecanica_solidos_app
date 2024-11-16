import { Component, Inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {conteudoExercicio} from '../../data/conteudo_exercicio';

@Component({
  selector: 'app-content-exercicios',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './content-exercicios.component.html',
  styleUrl: './content-exercicios.component.css'
})
export class ContentExerciciosComponent implements OnInit{
  title: string = '';
  selectedAnswer: string = '';
  correctAnswer: string = 'B';
  feedbackClass: { [key: string]: string } = {};
  question: { pergunta?: string; respA?: string; respB?: string; respC?: string; respD?: string; resposta?: string; dica?: string } = {};
  idQuestion: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string, idContent: number }) {
    this.title = data.content;
    this.idQuestion = data.idContent;
  }
  ngOnInit(): void {
    this.question = conteudoExercicio[this.idQuestion];
    this.correctAnswer = this.question.resposta? this.question.resposta: 'B';
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
