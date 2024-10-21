import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    resultado: string = '0';
    operador: string | null = null;
    primerOperando: number | null = null;
  
    agregarInput(valor: string) {
      if (this.resultado === '0') {
        this.resultado = valor;
      } else {
        this.resultado += valor;
      }
    }
  
    agregarOperador(op: string) {
      if (this.primerOperando === null) {
        this.primerOperando = parseFloat(this.resultado);
        this.operador = op;
        this.resultado = '0';
      } else {
        this.calcular();
        this.operador = op;
      }
    }
  
    calcular() {
      if (this.primerOperando !== null && this.operador) {
        const segundoOperando = parseFloat(this.resultado);
        switch (this.operador) {
          case '+':
            this.resultado = (this.primerOperando + segundoOperando).toString();
            break;
          case '-':
            this.resultado = (this.primerOperando - segundoOperando).toString();
            break;
          case '*':
            this.resultado = (this.primerOperando * segundoOperando).toString();
            break;
          case '/':
            this.resultado = (this.primerOperando / segundoOperando).toString();
            break;
        }
        this.primerOperando = null;
        this.operador = null;
      }
    }
  
    reset() {
      this.resultado = '0';
      this.primerOperando = null;
      this.operador = null;
    }
}
