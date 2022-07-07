import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/Article.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  public articles: ArticleModel[] = [];

  ngOnInit(): void {
    this.newsService.getNews().subscribe((response: any) => {
      console.log(response.articles);
      this.articles = response.articles;
    });
  }
}
