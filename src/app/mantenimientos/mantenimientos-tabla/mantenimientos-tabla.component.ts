import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Mantenimientos } from 'src/app/mantenimientos/mantenimientos';
import { MantenimientosTablaDataSource } from './mantenimientos-tabla-datasource';
import { MantenimientosService } from 'src/app/mantenimientos/service/mantenimientos.service';
import { Router } from '@angular/router';
import { SendMantenimientoService } from '../service/send-mantenimiento.service';


@Component({
  selector: 'app-mantenimientos-tabla',
  templateUrl: './mantenimientos-tabla.component.html',
  styleUrls: ['./mantenimientos-tabla.component.css']
})

export class MantenimientosTablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Mantenimientos>;
  dataSource!: MantenimientosTablaDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'costo', 'fecha_entrada', 'fecha_salida', 'estado', 'equipo', 'empleado', 'observaciones', 'acciones'];

  constructor(private mantenimientosServices: MantenimientosService, private cd: ChangeDetectorRef, private router: Router, private sm: SendMantenimientoService) {   
  } 
  
  ngOnInit(): void {
    this.insertData();
  }

  insertData() {
    this.mantenimientosServices.getMantenimientos().subscribe( data => {
      this.dataSource = new MantenimientosTablaDataSource(data);
      this.table.dataSource = this.dataSource;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  public deleteMantenimiento(id: number) {
    const alerta = confirm(`¿Realmente desea Eliminar el registro ${id}?`);
    
    if (alerta) {
      this.mantenimientosServices.deleteMantenimiento(id).subscribe(
        (response: Mantenimientos) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      )
      window.location.reload();
    }  
  }

  public searchMantenimiento(id: number) {
    this.mantenimientosServices.getMantenimiento(id).subscribe(
      (response: Mantenimientos) => {this.sm.setMantenimiento(response)},
      (err: HttpErrorResponse) => {alert(err.message)}
    );

    setTimeout(() => {
      this.router.navigate(['home/mantenimientos/formulario']);
    }, 300);
  }
}
