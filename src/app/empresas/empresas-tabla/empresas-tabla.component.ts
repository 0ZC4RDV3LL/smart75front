import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpresasTablaDataSource, EmpresasTablaItem } from './empresas-tabla-datasource';

@Component({
  selector: 'app-empresas-tabla',
  templateUrl: './empresas-tabla.component.html',
  styleUrls: ['./empresas-tabla.component.css']
})
export class EmpresasTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EmpresasTablaItem>;
  dataSource: EmpresasTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nit', 'nombre', 'correo', 'telefono', 'direccion', 'contacto', 'ciudad'];

  constructor() {
    this.dataSource = new EmpresasTablaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
