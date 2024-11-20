import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.scss']
})
export class Exercicio4Component {
  numero1: number | null = null;
  numero2: number | null = null;
  operacao: string | null = null;
  resultado: number | null = null;

  calcular() {
    if (this.numero1 !== null && this.numero2 !== null && this.operacao) {
      switch (this.operacao) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
        case '/':
          if (this.numero2 === 0) {
            this.resultado = null;
            alert('Divisão por zero não é permitida!');
          } else {
            this.resultado = this.numero1 / this.numero2;
          }
          break;
      }
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  limpar() {
    this.numero1 = null;
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }
}
