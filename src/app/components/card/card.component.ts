import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardText: string = "Text";
  //@Input() cardDescription: string = "Description";
  //@Input() cardTitle: string = "Title";
  @Input() cardImage: string = "Image";
  constructor() { }

  ngOnInit(): void {
  }

}
