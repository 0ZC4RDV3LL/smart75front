import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Empresas } from 'src/app/empresas/empresas';
import { EmpresasService } from 'src/app/empresas/service/empresas.service';
import { EmpresasTablaDataSource } from './empresas-tabla-datasource';

@Component({
  selector: 'app-empresas-tabla',
  templateUrl: './empresas-tabla.component.html',
  styleUrls: ['./empresas-tabla.component.css']
})
export class EmpresasTablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empresas>;
  dataSource!: EmpresasTablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nit', 'razon_social', 'email', 'contacto', 'telefono', 'direccion', 'ciudad'];

  constructor(private empresasService: EmpresasService, private cd: ChangeDetectorRef) {
    
  } 
  ngOnInit(): void {
    this.insertData();
  }
  
  insertData(): void {
    this.empresasService.getEmpresas().subscribe(
      (data: Empresas[]) => {
        this.dataSource = new EmpresasTablaDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.cd.detectChanges();
      },
      (err: HttpErrorResponse) => alert(err.message)
    );    
  }
}
