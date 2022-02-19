import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  lat: any;
  lon: any;
  clima: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((sucess) => {
        this.lat = sucess.coords.latitude;
        this.lon = sucess.coords.longitude;

        this.apiService.getDadosMetereologicosByCoords(this.lat, this.lon).subscribe(data => {
          this.clima = data;
        });
      })
    }
  }

  getCity(city: string) {
    this.apiService.getDadosMetereologicosByCityName(city).subscribe(data => {
      this.clima = data;
      console.log(data)
    })
  }
}
