import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpleadosTablaDataSource, EmpleadosTablaItem } from './empleados-tabla-datasource';

@Component({
  selector: 'app-empleados-tabla',
  templateUrl: './empleados-tabla.component.html',
  styleUrls: ['./empleados-tabla.component.css']
})
export class EmpleadosTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmpleadosTablaItem>;
  dataSource: EmpleadosTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'correo', 'telefono', 'rol'];

  constructor() {
    this.dataSource = new EmpleadosTablaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
