import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { FormCardComponent } from './components/form-card/form-card.component';
import { NewsComponent } from './pages/news/news.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { MarvelService } from './services/marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormCardComponent,
    NewsComponent,
    CardRegisterComponent,
    MarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
