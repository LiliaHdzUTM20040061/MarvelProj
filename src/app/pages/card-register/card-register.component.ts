import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card: CardModel = new CardModel();
  //cardText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat provident eaque assumenda, nesciunt perspiciatis, debitis optio magnam numquam quo, officiis ex earum sint. Praesentium cum enim tenetur eaque delectus.';
  dataCard: CardModel[] = [
    {
      cardText: "HTML",
      cardImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
    },
    {
      cardText: "CSS",
      cardImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
    },
    {
      cardText: "JS",
      cardImage: "https://lorenzohermoso.com/static/media/express.c502658a.png"
    },
    {
      cardText: "REACT",
      cardImage: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
      cardText: "ANGULAR",
      cardImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png"
    },
    {
      cardText: "PHP",
      cardImage: "https://pngimg.com/uploads/php/php_PNG36.png"
    },
  ]

  addCard(card: CardModel){
    this.dataCard.push(Object.assign({}, card));
  }

}
