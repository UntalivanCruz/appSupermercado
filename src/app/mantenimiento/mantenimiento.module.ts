import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { InventarioComponent } from './inventario/inventario.component';

//Importaciones de NG Zorro
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [
    ProductosComponent,
    CategoriasComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    //NG ZORRO
    NzCarouselModule
  ]
})
export class MantenimientoModule { }
