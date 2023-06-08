import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { FaqComponent } from './faq/faq.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ElementoAddComponent } from './elemento-add/elemento-add.component';
import { ElementoMostrarComponent } from './elemento-mostrar/elemento-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FaqComponent,
    ContactoComponent,
    ElementoAddComponent,
    ElementoMostrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
