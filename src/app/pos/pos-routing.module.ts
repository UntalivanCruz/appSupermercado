import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { FacturasComponent } from './facturas/facturas.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'compras', component: ComprasComponent },
      { path: 'facturas', component: FacturasComponent },
      { path: 'ventas', component: VentasComponent },
      { path: '**', redirectTo:'compras'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
