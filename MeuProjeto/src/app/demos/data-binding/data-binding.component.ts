import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent{
  public contadorCliques : number = 0;
  public nome : string = "";
  public urlImagem : string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"

  adicionarClique(){
    this.contadorCliques++;
  }
  
  zerarContadorClique(){
    this.contadorCliques = 0;
  }

  keyUp(event : any){
    this.nome = event.target.value;
  }
}
