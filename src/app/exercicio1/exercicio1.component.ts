import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.scss'],
})
export class Exercicio1Component {
  distancia: number | null = null;
  litros: number | null = null;
  resultado: number | null = null;
  classificacao: string = '';
  corClassificacao: string = '';

  calcularConsumo() {
    if (this.distancia !== null && this.litros !== null && this.litros > 0) {
      this.resultado = parseFloat((this.distancia / this.litros).toFixed(2));
      this.definirClassificacao(this.resultado);
    } else {
      this.resultado = null;
      this.classificacao = 'Por favor, insira valores válidos!';
      this.corClassificacao = 'red';
    }
  }

  definirClassificacao(consumo: number) {
    if (consumo > 13) {
      this.classificacao = 'Econômico';
      this.corClassificacao = 'green';
    } else if (consumo >= 10 && consumo <= 13) {
      this.classificacao = 'Normal';
      this.corClassificacao = 'orange';
    } else {
      this.classificacao = 'Gastador';
      this.corClassificacao = 'red';
    }
  }

  limpar() {
    this.distancia = null;
    this.litros = null;
    this.resultado = null;
    this.classificacao = '';
    this.corClassificacao = '';
  }
}
