import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-exercicios-praticos',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule],
  templateUrl: './exercicios-praticos.component.html',
  styleUrl: './exercicios-praticos.component.css'
})
export class ExerciciosPraticosComponent {
  title: string = '';
  numero_conteudo: number = 0;
  isCalculatorOpen = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: string, numero_container: number }, private dialogRef: MatDialogRef<ExerciciosPraticosComponent>, private sanitizer: DomSanitizer) {
    this.title = data.content;
    this.numero_conteudo = data.numero_container;
  }

  close(): void {
    this.dialogRef.close();
  }

  toggleCalculator() {
    this.isCalculatorOpen = !this.isCalculatorOpen;
  }

  respostas = {
    tensao: '',
    seguranca: '',
    deformacaoEscoamento: '',
    elasticidade: '',
    deformacaoLongitudinal: '',
    deformacaoTransversal: '',
    variacaoComprimento: '',
    variacaoLargura: ''
  };

  resultados: {
    tensao: boolean | null;
    seguranca: boolean | null;
    deformacaoEscoamento: boolean | null;
    elasticidade: boolean | null;
    deformacaoLongitudinal: boolean | null;
    deformacaoTransversal: boolean | null;
    variacaoComprimento: boolean | null;
    variacaoLargura: boolean | null;
  } = {
    tensao: null,
    seguranca: null,
    deformacaoEscoamento: null,
    elasticidade: null,
    deformacaoLongitudinal: null,
    deformacaoTransversal: null,
    variacaoComprimento: null,
    variacaoLargura: null
  };

  // Método para calcular os parâmetros de Mecânica dos Sólidos
  calcularParametros() {
    const diametro_A = 115;  
    const comprimento_B = 125;  
    const forca_C = 200 * Math.pow(10, 3); 
    const tensao_escoamento = 425; 
    const modulo_elasticidade = 200;
    const coeficiente_poisson = 0.31;

    // Conversões necessárias
    const modulo_elasticidade_Pa = modulo_elasticidade * Math.pow(10, 9);  // GPa para Pa

    // Cálculo da área da seção transversal (A)
    const area_A = (Math.PI / 4) * Math.pow(diametro_A * Math.pow(10, -3), 2);  // mm² para m²

    // Cálculo da tensão (σ)
    const tensao_sigma = forca_C / area_A;  // Pa
    const tensao_sigma_mpa = tensao_sigma / Math.pow(10, 6);  // Pa para MPa

    // Coeficiente de segurança (S)
    const coeficiente_seguranca = tensao_escoamento / tensao_sigma_mpa;

    // Deformação na tensão de escoamento (εe)
    const deformacao_escoamento = tensao_escoamento * Math.pow(10, 6) / modulo_elasticidade_Pa;  // em mm/mm

    // Deformação longitudinal (ε)
    const deformacao_longitudinal = tensao_sigma / modulo_elasticidade_Pa;

    // Deformação transversal (εt)
    const deformacao_transversal = -coeficiente_poisson * deformacao_longitudinal;

    // Variação de comprimento (Δl)
    const variacao_comprimento = deformacao_longitudinal * comprimento_B;

    // Variação de largura (Δw)
    const variacao_largura = deformacao_transversal * (diametro_A * Math.pow(10, -3));  // mm

    // Retorna os resultados calculados
    return {
      tensao: parseFloat(tensao_sigma_mpa.toFixed(3)),
      seguranca: parseFloat(coeficiente_seguranca.toFixed(2)),
      deformacaoEscoamento: parseFloat(deformacao_escoamento.toFixed(5)),
      elasticidade: modulo_elasticidade,
      deformacaoLongitudinal: parseFloat(deformacao_longitudinal.toFixed(5)),
      deformacaoTransversal: parseFloat(deformacao_transversal.toFixed(5)),
      variacaoComprimento: parseFloat(variacao_comprimento.toFixed(3)),
      variacaoLargura: parseFloat(variacao_largura.toFixed(5))
    };
  }

  // Método para verificar as respostas
  verificarRespostas() {
    const resultadosCalculados = this.calcularParametros();
  
    // Compara as respostas do usuário com os valores calculados
    for (const key in this.respostas) {
      if (this.respostas.hasOwnProperty(key)) {
        const typedKey = key as keyof typeof this.respostas; 
  
        // Verifica se a resposta do usuário corresponde ao valor calculado
        this.resultados[typedKey] = this.respostas[typedKey] === resultadosCalculados[typedKey]?.toString();
      }
    }
  }
}
