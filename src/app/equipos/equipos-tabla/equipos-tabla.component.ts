import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EquiposTablaDataSource, EquiposTablaItem } from './equipos-tabla-datasource';

@Component({
  selector: 'app-equipos-tabla',
  templateUrl: './equipos-tabla.component.html',
  styleUrls: ['./equipos-tabla.component.css']
})
export class EquiposTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EquiposTablaItem>;
  dataSource: EquiposTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tipo', 'marca', 'serial', 'modelo', 'cliente', 'observaciones'];

  constructor() {
    this.dataSource = new EquiposTablaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
