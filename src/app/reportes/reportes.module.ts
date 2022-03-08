import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { VentasComponent } from './ventas/ventas.component';
import { ResumenComponent } from './resumen/resumen.component';


@NgModule({
  declarations: [
    VentasComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
