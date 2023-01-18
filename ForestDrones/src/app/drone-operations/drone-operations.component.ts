import { DroneService, DroneStatus, Position } from './../drone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drone-operations',
  templateUrl: './drone-operations.component.html',
  styleUrls: ['./drone-operations.component.css']
})
export class DroneOperationsComponent implements OnInit{

  public position: Position
  public id?: number

  constructor(private droneService: DroneService) {
    this.position = {x: 0, y: 0}
   }

  ngOnInit(): void {
    this.droneService.getDroneStatus().subscribe(
      (droneStatus) => {
        this.drones = droneStatus
      }
    );
  }

  public drones?: DroneStatus[];

  public getActiveDrones(){
    return this.drones?.filter(drone => drone.isActive);
  }

  public fly(){
    if(this.id != undefined)
    {
      this.droneService.flyDrone(this.id, this.position).subscribe(
          () => this.ngOnInit()
        )
    }
  }
}
