import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '5dbd3c1b3b28e7612a9c5a586054aa79';

  constructor(private http: HttpClient) { }

  getDadosMetereologicosByCoords(lat: any, lon:any) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric') //unidades de medida -> metric: para converter a temp em Cº
      .set('appid', this.apiKey) //sua chave de API exclusiva

      return this.http.get(this.url, {params});
  }

  getDadosMetereologicosByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric') //unidades de medida -> metric: para converter a temp em Cº
      .set('appid', this.apiKey) //sua chave de API exclusiva

      return this.http.get(this.url, {params});

  }
}
