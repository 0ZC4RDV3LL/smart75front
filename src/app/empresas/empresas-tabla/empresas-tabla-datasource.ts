import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface EmpresasTablaItem {
  id: number;
  nit: string;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  contacto: string;
  ciudad: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EmpresasTablaItem[] = [
  {id: 1, nit: 'Hydrogen', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 2, nit: 'Helium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 3, nit: 'Lithium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 4, nit: 'Beryllium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 5, nit: 'Boron', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 6, nit: 'Carbon', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 7, nit: 'Nitrogen', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 8, nit: 'Oxygen', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 9, nit: 'Fluorine', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 10, nit: 'Neon', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 11, nit: 'Sodium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 12, nit: 'Magnesium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 13, nit: 'Aluminum', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 14, nit: 'Silicon', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 15, nit: 'Phosphorus', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 16, nit: 'Sulfur', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 17, nit: 'Chlorine', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 18, nit: 'Argon', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 19, nit: 'Potassium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
  {id: 20, nit: 'Calcium', nombre: '', correo: '', telefono: '', direccion: '', contacto: '', ciudad: ''},
];

/**
 * Data source for the EmpresasTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpresasTablaDataSource extends DataSource<EmpresasTablaItem> {
  data: EmpresasTablaItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EmpresasTablaItem[]> {
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
  private getPagedData(data: EmpresasTablaItem[]): EmpresasTablaItem[] {
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
  private getSortedData(data: EmpresasTablaItem[]): EmpresasTablaItem[] {
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
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
