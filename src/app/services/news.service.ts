import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = environment.urlNewsApi;
  constructor(private http: HttpClient) { }

  getNews(){
    const query = {
      q: "tesla",
      from: "2022-06-29",
      sortBy: "publishedAt",
      apikey: "0e5a6464e32e4dffb6ade9fe63aebb3e"
    }
    //this.url + '/v2/everything'
    //template literal - backticks
    return this.http.get(`${this.url}/v2/everything`, {params: query});
  }
}
