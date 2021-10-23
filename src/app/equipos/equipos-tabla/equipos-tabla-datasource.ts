import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Equipos } from 'src/app/equipos/equipos';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Equipos[] = [
  {id: 1, tipo: 'Hydrogen', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 2, tipo: 'Helium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 3, tipo: 'Lithium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 4, tipo: 'Beryllium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 5, tipo: 'Boron', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 6, tipo: 'Carbon', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 7, tipo: 'Nitrogen', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 8, tipo: 'Oxygen', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 9, tipo: 'Fluorine', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 10, tipo: 'Neon', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 11, tipo: 'Sodium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 12, tipo: 'Magnesium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 13, tipo: 'Aluminum', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 14, tipo: 'Silicon', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 15, tipo: 'Phosphorus', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 16, tipo: 'Sulfur', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 17, tipo: 'Chlorine', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 18, tipo: 'Argon', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 19, tipo: 'Potassium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
  {id: 20, tipo: 'Calcium', marca:'', numero_serial: '', modelo: '', cliente: 0, observaciones: ''},
];

/**
 * Data source for the EquiposTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EquiposTablaDataSource extends DataSource<Equipos> {
  
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(public data: Equipos[]) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Equipos[]> {
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
  private getPagedData(data: Equipos[]): Equipos[] {
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
  private getSortedData(data: Equipos[]): Equipos[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'tipo': return compare(a.tipo, b.tipo, isAsc);
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
