import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url = environment.urlMarvelApi
  constructor(private http: HttpClient) { }

  getMarvel(){
    const query = {
      orderBy: "name",
      ts: "5",
      apikey: "90364cada3d584c7581cb152668878db",
      hash: "ec30d5d3b0da947ac4914cd70b11538c"
    }
    return this.http.get(`${this.url}:443/v1/public/characters`, {params: query});
  }
}
