import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Empresas } from '../../interfaces/empresas'
import { EmpresasService } from 'src/app/services/empresas.service';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Empresas[] = [
  {id: 1, razon_social: 'Hydrogen', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 2, razon_social: 'Helium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 3, razon_social: 'Lithium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 4, razon_social: 'Beryllium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 5, razon_social: 'Boron', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 6, razon_social: 'Carbon', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 7, razon_social: 'Nitrogen', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 8, razon_social: 'Oxygen', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 9, razon_social: 'Fluorine', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 10, razon_social: 'Neon', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 11, razon_social: 'Sodium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 12, razon_social: 'Magnesium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 13, razon_social: 'Aluminum', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 14, razon_social: 'Silicon', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 15, razon_social: 'Phosphorus', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 16, razon_social: 'Sulfur', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 17, razon_social: 'Chlorine', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 18, razon_social: 'Argon', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 19, razon_social: 'Potassium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
  {id: 20, razon_social: 'Calcium', nit: 900900000, email: '', telefono: 0, direccion: '', contacto: '', ciudad: ''},
];

/**
 * Data source for the EmpresasTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpresasTablaDataSource extends DataSource<Empresas> {
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(public data: Empresas[]) {
    super();
    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Empresas[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Empresas[]): Empresas[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Empresas[]): Empresas[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nit': return compare(a.nit, b.nit, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

  setEmpresasData(data:Empresas[]):void {
    // this.data = data;
    data.forEach(element => {
      this.data.push(element);
    });
    console.log(this.data);
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


