import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpleadosTablaDataSource } from './empleados-tabla-datasource';
import { Empleados } from '../empleados';
import { EmpleadosService } from 'src/app/empleados/service/empleados.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-empleados-tabla',
  templateUrl: './empleados-tabla.component.html',
  styleUrls: ['./empleados-tabla.component.css']
})
export class EmpleadosTablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empleados>;
  dataSource!: EmpleadosTablaDataSource;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre_completo', 'email', 'telefono', 'rol', 'acciones'];

  constructor(private empleadosService: EmpleadosService, private cd: ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    this.insertData();
  }
  
  insertData(): void {

    this.empleadosService.getEmpleados().subscribe((data: Empleados[]) => {      
      this.dataSource = new EmpleadosTablaDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    },
    (err: HttpErrorResponse) => {alert(err.message);}
    );
    
  }

  deleteEmpleado(id: number) {
    const alerta = confirm(`¿Realmente desea eliminar el regitro ${id}`);
    if (alerta) {
      this.empleadosService.deleteEmpleado(id).subscribe(
        (response: Empleados) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      )
    }
  }

  searchEmpleado(id: number) {
    this.empleadosService.getEmpleado(id).subscribe(
      (response: Empleados) => {console.log(response)},
      (err: HttpErrorResponse) => {alert(err.message)}
    )
  }

}
