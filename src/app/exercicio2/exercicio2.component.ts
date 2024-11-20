import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.scss']
})
export class Exercicio2Component {
  anoNascimento: number | null = null;
  idade: number | null = null;
  classificacao: string = '';

  calcularIdade() {
    const anoAtual = new Date().getFullYear();

    if (this.anoNascimento && this.anoNascimento > 0 && this.anoNascimento <= anoAtual) {
      this.idade = anoAtual - this.anoNascimento;
      this.definirClassificacao(this.idade);
    } else {
      this.idade = null;
      this.classificacao = 'Por favor, insira um ano válido!';
    }
  }

  definirClassificacao(idade: number) {
    if (idade <= 12) {
      this.classificacao = 'Criança';
    } else if (idade >= 13 && idade <= 17) {
      this.classificacao = 'Adolescente';
    } else if (idade >= 18 && idade <= 59) {
      this.classificacao = 'Adulto';
    } else {
      this.classificacao = 'Idoso';
    }
  }

  limpar() {
    this.anoNascimento = null;
    this.idade = null;
    this.classificacao = '';
  }
}
