import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpleadosTablaDataSource } from './empleados-tabla-datasource';
import { Empleados } from '../../interfaces/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-tabla',
  templateUrl: './empleados-tabla.component.html',
  styleUrls: ['./empleados-tabla.component.css']
})
export class EmpleadosTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empleados>;
  dataSource: EmpleadosTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre_completo', 'email', 'telefono', 'rol'];

  constructor(private empleadosService: EmpleadosService) {
    this.dataSource = new EmpleadosTablaDataSource();
    this.empleadosService.getEmpleados().subscribe(data => this.dataSource.setEmpleadosData(data));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
