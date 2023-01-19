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
  public scanId: number
  public scannedTrees: Position[]

  constructor(private droneService: DroneService) {
    this.scanId = 1;
    this.position = {x: 0, y: 0}
    this.scannedTrees = [
      {x: 0, y: 0},
      {x: 4, y: 3},
    ]
   }

  ngOnInit(): void {
    this.droneService.getDroneStatus().subscribe(
      (droneStatus) => {
        this.droneService.drones = droneStatus
      }
    );
  }

  public getActiveDrones(){
    return this.droneService.drones?.filter(drone => drone.isActive);
  }

  public fly(){
    if(this.id != undefined)
    {
      this.droneService.flyDrone(this.id, this.position).subscribe(
          () => this.ngOnInit()
        )
    }
  }

  public scan(){
    this.droneService.scanTrees(this.scanId).subscribe(
      (data) => {
        console.log(data)

      }
    )
  }
}
