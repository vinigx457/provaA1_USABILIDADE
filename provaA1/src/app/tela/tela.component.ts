import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css'],
})
export class TelaComponent {
  title = 'Prova-Numero-Binario';
  dec: number = 0;
  bin: number = 0;

  calcular() {
    let resultado = parseInt(this.bin.toString(), 2);
    this.dec = resultado;

    console.log(resultado);
  }
}
