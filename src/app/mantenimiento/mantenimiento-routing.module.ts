import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'categorias',component:CategoriasComponent},
      {path:'inventario',component:InventarioComponent},
      {path:'productos',component:ProductosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
