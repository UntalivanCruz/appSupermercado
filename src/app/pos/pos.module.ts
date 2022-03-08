import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { VentasComponent } from './ventas/ventas.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    VentasComponent,
    FacturasComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
