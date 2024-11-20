import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss']
})
export class Exercicio3Component {
  altura: number | null = null;
  peso: number | null = null;
  resultadoIMC: number | null = null;
  classificacao: string = '';
  corClassificacao: string = '';

  calcularIMC() {
    if (this.altura && this.altura > 0 && this.peso && this.peso > 0) {
      this.resultadoIMC = parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
      this.definirClassificacao(this.resultadoIMC);
    } else {
      this.resultadoIMC = null;
      this.classificacao = 'Por favor, insira valores válidos!';
      this.corClassificacao = 'red';
    }
  }

  definirClassificacao(imc: number) {
    if (imc < 16) {
      this.classificacao = 'Magreza grave';
      this.corClassificacao = 'red';
    } else if (imc >= 16 && imc < 17) {
      this.classificacao = 'Magreza moderada';
      this.corClassificacao = 'orange';
    } else if (imc >= 17 && imc < 18.5) {
      this.classificacao = 'Magreza leve';
      this.corClassificacao = 'yellow';
    } else if (imc >= 18.5 && imc < 25) {
      this.classificacao = 'Saudável';
      this.corClassificacao = 'green';
    } else if (imc >= 25 && imc < 30) {
      this.classificacao = 'Sobrepeso';
      this.corClassificacao = 'orange';
    } else if (imc >= 30 && imc < 35) {
      this.classificacao = 'Obesidade Grau I';
      this.corClassificacao = 'red';
    } else if (imc >= 35 && imc < 40) {
      this.classificacao = 'Obesidade Grau II (severa)';
      this.corClassificacao = 'darkred';
    } else {
      this.classificacao = 'Obesidade Grau III (mórbida)';
      this.corClassificacao = 'brown';
    }
  }

  limpar() {
    this.altura = null;
    this.peso = null;
    this.resultadoIMC = null;
    this.classificacao = '';
    this.corClassificacao = '';
  }
}
