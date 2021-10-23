import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Equipos } from 'src/app/interfaces/equipos';
import { EquiposService } from 'src/app/services/equipos.service';
import { EquiposTablaDataSource } from './equipos-tabla-datasource';

@Component({
  selector: 'app-equipos-tabla',
  templateUrl: './equipos-tabla.component.html',
  styleUrls: ['./equipos-tabla.component.css']
})
export class EquiposTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Equipos>;
  dataSource!: EquiposTablaDataSource;
  data: Equipos[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tipo', 'marca', 'numero_serial', 'modelo', 'cliente', 'observaciones'];

  constructor(private equiposServices: EquiposService, private cd: ChangeDetectorRef) {
    this.equiposServices.getEquipos().subscribe(
      (response: Equipos[]) => {response.forEach(element => this.data.push(element))},
      (err: HttpErrorResponse) => {console.log(err.message)}
    );
  }

  ngAfterViewInit(): void {
    this.dataSource = new EquiposTablaDataSource(this.data);    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.cd.detectChanges();
  }
}
