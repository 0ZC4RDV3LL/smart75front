import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Empresas } from 'src/app/interfaces/empresas';
import { EmpresasService } from 'src/app/services/empresas.service';
import { EmpresasTablaDataSource } from './empresas-tabla-datasource';

@Component({
  selector: 'app-empresas-tabla',
  templateUrl: './empresas-tabla.component.html',
  styleUrls: ['./empresas-tabla.component.css']
})
export class EmpresasTablaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Empresas>;
  dataSource: EmpresasTablaDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nit', 'razon_social', 'email', 'contacto', 'telefono', 'direccion', 'ciudad'];

  constructor(private empresasService: EmpresasService) {
    this.dataSource = new EmpresasTablaDataSource();
  }
  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe(data => this.dataSource.setEmpresasData(data));
    
  }  

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
