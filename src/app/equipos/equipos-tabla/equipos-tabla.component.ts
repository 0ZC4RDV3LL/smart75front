import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Equipos } from 'src/app/equipos/equipos';
import { EquiposService } from 'src/app/equipos/service/equipos.service';
import { EquiposTablaDataSource } from './equipos-tabla-datasource';

@Component({
  selector: 'app-equipos-tabla',
  templateUrl: './equipos-tabla.component.html',
  styleUrls: ['./equipos-tabla.component.css']
})
export class EquiposTablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Equipos>;
  dataSource!: EquiposTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tipo', 'marca', 'numero_serial', 'modelo', 'cliente', 'observaciones'];

  constructor(private equiposServices: EquiposService, private cd: ChangeDetectorRef) {    
  }
  ngOnInit(): void {
    this.insertData();
  }

  insertData(): void {
    this.equiposServices.getEquipos().subscribe(
      (data: Equipos[]) => {
        this.dataSource = new EquiposTablaDataSource(data);    
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.cd.detectChanges();
      },
      (err: HttpErrorResponse) => {console.log(err.message)}
    );
  }
}
