import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Workhours } from './workhours';
import { enableDebugTools } from '@angular/platform-browser/src/browser/tools/tools';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: Number = environment.map.lat;
  lng: Number = environment.map.lng;
  name: string = environment.name;
  contact: any = environment.address;
  bHours: any = environment.businessHours;
  zoom: Number = 14;
  direction: string = environment.direction;
  dir: any = {
    origin: { lat: 24.799448, lng: 120.979021 },
    destination: { lat: 24.799524, lng: 120.975017 }
  };


  constructor() { }

  ngOnInit() {
    this.getDirection();
  }
  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    };
  }

  getDirections() {
    console.log('cliked ' + this.direction);
    window.open(this.direction);

  }
}
