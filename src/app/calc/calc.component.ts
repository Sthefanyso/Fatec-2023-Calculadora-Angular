import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  peso: number = 0;
  altura: number = 0;
  res: number = 0;
  msg: string = "";

  imc(){

  this.res = this.peso / ((this.altura/100) * (this.altura/100));
  this.res = parseFloat(this.res.toFixed(2));

  if ( this.res < 18.5){
    this.msg = "Magreza";
}
else if ( this.res > 18.5 && this.res < 24.9){
    this.msg = "Normal";
}
else if ( this.res > 25 && this.res < 29.9){
    this.msg = "Sobrepeso";
}
else if ( this.res > 30 && this.res < 34.9){
    this.msg = "Obesidade grau I";
}
else if ( this.res > 35 && this.res < 39.9){
    this.msg = "Obesidade grau II";
}
else if ( this.res > 40){
    this.msg = "Obesidade grau III";
}
  }
}