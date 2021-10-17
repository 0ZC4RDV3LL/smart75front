import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MantenimientosTablaDataSource, MantenimientosTablaItem } from './mantenimientos-tabla-datasource';

@Component({
  selector: 'app-mantenimientos-tabla',
  templateUrl: './mantenimientos-tabla.component.html',
  styleUrls: ['./mantenimientos-tabla.component.css']
})
export class MantenimientosTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MantenimientosTablaItem>;
  dataSource: MantenimientosTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'costo', 'ingreso', 'salida', 'estado', 'equipo', 'tecnico', 'observaciones'];

  constructor() {
    this.dataSource = new MantenimientosTablaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
