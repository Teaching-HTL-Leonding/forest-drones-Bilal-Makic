import { DroneService, DroneStatus } from './../drone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent implements OnInit {
  public drones?: DroneStatus[];

  constructor(private droneService: DroneService) {
  }

  ngOnInit(): void {
    this.droneService.getDroneStatus().subscribe(
      (droneStatus) => {
        this.drones = droneStatus
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

}
