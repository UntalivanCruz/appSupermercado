import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './resumen/resumen.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'resumen',component:ResumenComponent},
      {path:'ventas',component:VentasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
