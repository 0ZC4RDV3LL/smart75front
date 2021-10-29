import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/empresas/empresas';
import { EmpresasService } from 'src/app/empresas/service/empresas.service';
import { SendDataService } from '../service/send-data.service';
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
  displayedColumns = ['id', 'nit', 'razon_social', 'email', 'contacto', 'telefono', 'direccion', 'ciudad', 'acciones'];

  constructor(
    private empresasService: EmpresasService, 
    private cd: ChangeDetectorRef, 
    private sended: SendDataService,
    private router: Router
    ) {
    
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

  deleteEmpresa(id: number) {
    
    const alerta = confirm(`¿Realmente desea eliminar el registro ${id}?`);

    if (alerta) {
      this.empresasService.deleteEmpresa(id).subscribe(
        (response: Empresas) => {console.log(response)},
        (err: HttpErrorResponse) => {alert(err.message)}
      );
    }
    this.insertData();
    window.location.reload();
  }

  searchEmpresa(id: number){
    this.empresasService.getEmpresa(id).subscribe(
      (response: Empresas) => {
        console.log(response);        
        this.sended.setEmpresa(
          response.id, 
          response.razon_social, 
          response.nit, 
          response.direccion, 
          response.ciudad, 
          response.contacto, 
          response.email, 
          response.telefono
          )
      },
      (err: HttpErrorResponse) => {alert(err.message)}
    );
    setTimeout(()=>{
      this.router.navigate(['home/empresas/formulario'])
    }, 300);
  }
}
