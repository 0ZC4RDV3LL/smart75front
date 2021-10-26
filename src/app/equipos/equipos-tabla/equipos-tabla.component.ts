import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Equipos } from 'src/app/equipos/equipos';
import { EquiposService } from 'src/app/equipos/service/equipos.service';
import { SendEquipoService } from '../service/send-equipo.service';
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
  displayedColumns = ['id', 'tipo', 'marca', 'numero_serial', 'modelo', 'cliente', 'observaciones', 'acciones'];

  constructor(private equiposServices: EquiposService, private cd: ChangeDetectorRef, private se: SendEquipoService, private router: Router) {    
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

  public deleteEquipo(id: number){
    const alerta = confirm(`¿Realmente desea eliminar el registro ${id}?`);
    if (alerta) {
      this.equiposServices.deleteEquipo(id).subscribe(
        (response: Equipos) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      );
      window.location.reload();
    }    
  }

  public searchEquipo(id: number){
    this.equiposServices.getEquipo(id).subscribe(
      (response: Equipos) => {this.se.setEquipo(response)},
      (err: HttpErrorResponse) => {alert(err.message)}
    );

    setTimeout(() => {
      this.router.navigate(['home/equipos/formulario'])
    }, 300);
  }
}
