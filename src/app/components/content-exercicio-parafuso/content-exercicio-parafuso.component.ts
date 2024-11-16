import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-content-exercicio-parafuso',
  standalone: true,
  imports: [MatDialogModule, CommonModule,MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './content-exercicio-parafuso.component.html',
  styleUrl: './content-exercicio-parafuso.component.css'
})
export class ContentExercicioParafusoComponent {
  title: string = '';
  
  // Dados fornecidos
  forcaAplicada = 1750; // em N
  coeficienteSeguranca = 3.5;

  // Material do(s) parafuso(s)
  limiteEscoamentoParafuso = 330; // em MPa
  limiteResistenciaParafuso = 429; // em MPa

  // Material das chapas
  limiteEscoamentoChapa = 110; // em MPa
  limiteResistenciaChapa = 160; // em MPa

  // Respostas fornecidas pelo usuário
  respostas: { diametro: number | null; espessura: number | null; distancia: number | null } = {
    diametro: null,
    espessura: null,
    distancia: null,
  };

  // Resultados de verificação
  resultados: { [key: string]: boolean } = {};

  // Valores corretos
  valoresCorretos: { diametro: number | null; espessura: number | null; distancia: number | null } = {
    diametro: null,
    espessura: null,
    distancia: null,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { content: string; numero_container: number },
    private dialogRef: MatDialogRef<ContentExercicioParafusoComponent>,
    private sanitizer: DomSanitizer
  ) {
    this.calcularValoresCorretos();
    this.title = data.content;
  }

  // Função para calcular os valores corretos
  calcularValoresCorretos() {
    // Cálculo do Diâmetro do Parafuso (a)
    const areaResistenteParafuso =
      (this.forcaAplicada * this.coeficienteSeguranca) / 
      (this.limiteEscoamentoParafuso * 1e6); // Conversão MPa -> N/m²
    this.valoresCorretos.diametro = Math.sqrt((4 * areaResistenteParafuso) / Math.PI) * 1000; // Conversão m -> mm

    // Cálculo da Espessura da Chapa t2 (b)
    const pressaoEsmagamento = this.limiteResistenciaChapa * 1e6; // Conversão MPa -> N/m²
    this.valoresCorretos.espessura =
      (this.forcaAplicada * this.coeficienteSeguranca) /
      (pressaoEsmagamento * this.valoresCorretos.diametro * 1e-3);

    // Cálculo da Distância A2 (c)
    const tensaoRasgamento = this.limiteResistenciaChapa * 1e6; // Conversão MPa -> N/m²
    this.valoresCorretos.distancia =
      (this.forcaAplicada * this.coeficienteSeguranca) /
        (tensaoRasgamento * this.valoresCorretos.espessura * 1e-3) +
      this.valoresCorretos.diametro;
  }

  // Função para verificar as respostas fornecidas pelo usuário
  verificarRespostas() {
    // Comparar cada resposta do usuário com o valor correto
    for (const key in this.respostas) {
      if (this.respostas.hasOwnProperty(key)) {
        const respostaKey = key as keyof typeof this.respostas;
        this.resultados[respostaKey] =
          Math.abs((this.respostas[respostaKey] ?? 0) - (this.valoresCorretos[respostaKey] ?? 0)) < 0.01; // Tolerância de 0.01 mm
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
