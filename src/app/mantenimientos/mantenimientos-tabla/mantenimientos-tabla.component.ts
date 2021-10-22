import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Mantenimientos } from 'src/app/interfaces/mantenimientos';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import { MantenimientosTablaDataSource } from './mantenimientos-tabla-datasource';


@Component({
  selector: 'app-mantenimientos-tabla',
  templateUrl: './mantenimientos-tabla.component.html',
  styleUrls: ['./mantenimientos-tabla.component.css']
})

export class MantenimientosTablaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Mantenimientos>;
  dataSource: MantenimientosTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'costo', 'fecha_entrada', 'fecha_salida', 'estado', 'equipo', 'empleado', 'observaciones'];

  constructor(private mantenimientosServices: MantenimientosService, private cd: ChangeDetectorRef) {
    this.dataSource = new MantenimientosTablaDataSource();
  }
  insertData(): void {
    this.mantenimientosServices.getMantenimientos().subscribe(data => this.dataSource.setMantenimientosData(data));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.insertData();
    this.cd.detectChanges();
  }
}
