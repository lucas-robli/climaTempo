import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {
  url = 'https://api.openweathermap.org/data/2.5/weather'
  apiKey = '5dbd3c1b3b28e7612a9c5a586054aa79'
  constructor(private http: HttpClient) { }


  getWeatherDataByCoords(lat: any, lon:any) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric') //unidades de medida -> metric: para converter a temp em Cº
      .set('appid', this.apiKey) //sua chave de API exclusiva

      return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric') //unidades de medida -> metric: para converter a temp em Cº
      .set('appid', this.apiKey) //sua chave de API exclusiva

      return this.http.get(this.url, {params});

  }
}
