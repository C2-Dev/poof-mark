import { Component, OnInit } from '@angular/core';
import { LocationService } from "../location.service";
import {Fart} from "../models/fart";
import {FartService} from "../services/fart.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lon: number;
  farts: Fart[];

  constructor(public locationService: LocationService,
              public fartService: FartService) { }

  getFarts(): void {
    this.fartService.getFarts().
      subscribe(
        farts => {
          this.farts = farts;
          console.log('Fetched farts!');
        }
      );
  }

  getPosition(): void {
    this.locationService.getPosition().then(pos=>
    {
      this.lon = pos.lon;
      this.lat = pos.lat;
      console.log(`Position: ${pos.lon} ${pos.lat}`);
    })
  }

  ngOnInit() {
    this.getFarts()
    this.getPosition()

  }

}
