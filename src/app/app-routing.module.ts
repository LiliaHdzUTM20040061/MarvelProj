import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { MarvelComponent } from './pages/marvel/marvel.component';

const routes: Routes = [
  {path: "marvel",component: MarvelComponent},
  {path: "news",component: NewsComponent},
  {path: "cards", component: CardRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
