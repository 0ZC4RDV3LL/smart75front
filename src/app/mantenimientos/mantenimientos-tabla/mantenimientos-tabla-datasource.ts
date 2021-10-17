import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MantenimientosTablaItem {
  id: number;
  costo: number;
  ingreso: string;
  salida: string;
  estado: boolean;
  equipo: string;
  tecnico: string;
  observaciones: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MantenimientosTablaItem[] = [
  {id: 1, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 2, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 3, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 4, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 5, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 6, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 7, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 8, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 9, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 10, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 11, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 12, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 13, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 14, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 15, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 16, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 17, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 18, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 19, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
  {id: 20, costo: 0, ingreso: '', salida: '', estado: false, equipo: '', tecnico: '', observaciones:''},
];

/**
 * Data source for the MantenimientosTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MantenimientosTablaDataSource extends DataSource<MantenimientosTablaItem> {
  data: MantenimientosTablaItem[] = EXAMPLE_DATA;
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
  connect(): Observable<MantenimientosTablaItem[]> {
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
  private getPagedData(data: MantenimientosTablaItem[]): MantenimientosTablaItem[] {
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
  private getSortedData(data: MantenimientosTablaItem[]): MantenimientosTablaItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.costo, b.costo, isAsc);
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
