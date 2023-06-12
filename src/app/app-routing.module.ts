import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FaqComponent } from './faq/faq.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ElementoAddComponent } from './elemento-add/elemento-add.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'articulos', component: CardsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'anyadir', component: ElementoAddComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //Hay que importar el el routermodules con raiz de routes
  ],
  //Hay que exportar el modulo manualmente
  exports: [RouterModule]
})
export class AppRoutingModule { }
