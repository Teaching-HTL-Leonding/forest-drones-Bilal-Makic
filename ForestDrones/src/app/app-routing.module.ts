import { DroneOperationsComponent } from './drone-operations/drone-operations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronesComponent } from './drones/drones.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "drones" },
  { path: "drones", component: DronesComponent},
  { path: "droneOperations", component: DroneOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
