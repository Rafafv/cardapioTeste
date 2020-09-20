import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { CardapioPage } from '../cardapio/cardapio.page';
import { ReservaPage } from '../reserva/reserva.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  card(){
    //chama a tela por rota
    this.router.navigate(['cardapio']);
  }

  reservar(){
    this.router.navigate(['reserva']);
  }

  sobre(){
    this.router.navigate(['sobre']);
  }

}
