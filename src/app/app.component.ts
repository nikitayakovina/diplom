import {Component, OnInit} from '@angular/core';
import {LocationService} from "../service/location-service.service";
import {randomLocation} from 'random-location'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  public ngOnInit(): void {}
}
