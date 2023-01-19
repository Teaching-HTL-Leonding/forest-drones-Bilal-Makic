import { DroneService, DroneStatus } from './../drone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent implements OnInit {


  constructor(private droneService: DroneService) {
  }

  ngOnInit(): void {
    this.droneService.getDroneStatus().subscribe(
      (droneStatus) => {
        this.droneService.drones = droneStatus
      }
    );
  }

  public activate(id: number){
    this.droneService.activateDrone(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  public deactivate(id: number){
    this.droneService.deactivateDrone(id).subscribe(
      () => {
        this.ngOnInit();
      }
    )
  }

  public getStatus(id: number){
      if(this.droneService.drones != undefined){
        if(this.droneService.drones[id].isActive){
          return "Active"
        }
        else
        return "Deactivated"
      }
      return "Drone is undefined";
  }

  public getDrones(){
    return this.droneService.drones;
  }
}
