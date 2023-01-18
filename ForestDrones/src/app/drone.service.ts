
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DroneStatus {
  id: number
  isActive: boolean
  position?: Position
}

export interface Position {
  x: number
  y: number
}


@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private httpClient: HttpClient) { }

  public getDroneStatus(){
    return this.httpClient.get<DroneStatus[]>("http://localhost:5110/drones")
  }

  public activateDrone(id: number){
    return this.httpClient.post(`http://localhost:5110/drones/${id}/activate`, {

    })
  }

  public deactivateDrone(id: number){
    return this.httpClient.post(`http://localhost:5110/drones/${id}/shutdown`, {

    })
  }

  public flyDrone(id: number, position: Position){
    return this.httpClient.post(`http://localhost:5110/drones/${id}/flyTo`, position)
  }
}
