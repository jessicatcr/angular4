import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <!--<p>Aula 3</p>-->
  <!--<p>Como está?</p>-->
  <!--<p>{{ meuObjeto.pais }}</p>-->
  <!--<ul>-->
  <!--<li *ngFor="let vet of meuVetor">{{ vet }}</li>-->
  <!--<br>-->
  <!--<li *ngIf="meuVetor2">Eu existo</li>&lt;!&ndash;Pode usar operadores de ==, !=, >, <, !... &ndash;&gt;-->
  <!--<br>-->
  <!--<li *ngIf="meuVetor2; else outroTmpl">Eu existo</li>-->
  <!--</ul>-->

  <!--<div *ngIf="meuVetor2; then tmpl1 else tmpl2"></div>-->

  <!--<ng-template #outroTmpl>Eu não existo. </ng-template>-->
  <!--<ng-template #tmpl1>Vetor como verdadeiro. </ng-template>-->
  <!--<ng-template #tmpl2>Vetor como falso. </ng-template>-->
  <!--<p>Aula 4</p>-->
  <!--<img src="{{ angularLogo }}">-->
  <!--<img [src]="angularLogo"> &lt;!&ndash; Jeito mais comum de property binding &ndash;&gt;-->
  <!--<img bind-src="angularLogo">-->
  <!--<button [disabled]="statusBotao == 'desabilitado'">Meu Botão</button>-->
  <!--<p>Aula 5</p>-->
  <!--<button (click)="meuEvento($event)">Meu Botão</button>-->
  <!--<button (mouseenter)="meuEvento($event)">Meu Botão</button> &lt;!&ndash;Passar por cima do botão&ndash;&gt;-->
  <!--<p>Aula 6</p> &lt;!&ndash;Coisas CSS&ndash;&gt;-->
  <!--<p>Aula 7</p>-->
  <!--<h1 [class]="classeTitulo">Olá!</h1>-->
  <!--<h1 [class.titulo-vermelho]="classeTitulo">Olá!</h1>-->
  <!--<h1 [ngClass]="classesTitulo">Oláá!</h1>-->
  <!--<p>Aula 8</p>-->
  <!--<h1 [style.color]="estiloTitulo ? 'green' : 'pink'">Olá!</h1>-->
  <!--<h1 [ngStyle]="estilosTitulo">Oláá!</h1>-->
  <!--<p>Aula 9</p>-->
  <!--<p>{{ algumaPropriedade }}</p> &lt;!&ndash;No console tem o vetor de cars&ndash;&gt;-->
  <p>Aula 10</p>
  <p [@minhaAnimacao]="state" (click)="meAnime()"> Serei Animado </p>

  `,

  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }
  /*h1 {*/
    /*text-decoration: underline;*/
  /*}*/
  /*.titulo-vermelho {*/
      /*color: red;*/
    /*}*/
  /*.titulo-largo {*/
    /*font-size: 4em;*/
  /*}*/
  `],
  animations: [
    trigger('minhaAnimacao', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      // transition('small <=> large', animate('300ms ease-in', style({
      //   transform: 'translateY(40px)'
      // }))),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ]))),
    ]),
  ]
})
export class AppComponent {
  // Aula 10
  state: string = 'small';
  meAnime(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  // Aula 9
  // constructor(private dataService: DataService) {
  //
  // }
  // algumaPropriedade = '';
  // ngOnInit() {
  //   console.log(this.dataService.cars);
  //   this.algumaPropriedade = this.dataService.myDado();
  // }

  // Aula 8
  // estiloTitulo = 'red';
  // estiloTitulo = false;
  // estilosTitulo = {
  //   'color': 'red',
  //   'font-size': '4em'
  // };

  // Aula 7
  // classeTitulo = 'titulo-vermelho';
  // classeTitulo = true;
  // classesTitulo = {
  //   'titulo-vermelho': true,
  //   'titulo-largo':true
  // };

  // Aula 5
  // Referência de event Binding - https://developer.mozilla.org/en-US/docs/Web/Events
  // meuEvento(evento) {
  //   console.log(evento);
  // }

  // Aula 4
  // angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  // statusBotao = false;
  // statusBotao = 'desabilitado';
  // statusBotao = 'habilitado';

  // Aula 3
  // meuObjeto = {
  //   genero: 'feminino',
  //   idade: 26,
  //   pais: 'Brasil'
  // };
  // meuVetor = ['seu', 'sua', 'nosso'];
  // meuVetor2 = true;
}
