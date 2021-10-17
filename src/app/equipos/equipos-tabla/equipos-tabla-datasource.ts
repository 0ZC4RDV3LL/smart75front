import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface EquiposTablaItem {
  id: number;
  tipo: string;
  marca: string;
  serial: string;
  modelo: string;
  cliente: string;
  observaciones: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EquiposTablaItem[] = [
  {id: 1, tipo: 'Hydrogen', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 2, tipo: 'Helium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 3, tipo: 'Lithium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 4, tipo: 'Beryllium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 5, tipo: 'Boron', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 6, tipo: 'Carbon', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 7, tipo: 'Nitrogen', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 8, tipo: 'Oxygen', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 9, tipo: 'Fluorine', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 10, tipo: 'Neon', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 11, tipo: 'Sodium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 12, tipo: 'Magnesium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 13, tipo: 'Aluminum', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 14, tipo: 'Silicon', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 15, tipo: 'Phosphorus', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 16, tipo: 'Sulfur', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 17, tipo: 'Chlorine', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 18, tipo: 'Argon', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 19, tipo: 'Potassium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
  {id: 20, tipo: 'Calcium', marca:'', serial: '', modelo: '', cliente: '', observaciones
: ''},
];

/**
 * Data source for the EquiposTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EquiposTablaDataSource extends DataSource<EquiposTablaItem> {
  data: EquiposTablaItem[] = EXAMPLE_DATA;
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
  connect(): Observable<EquiposTablaItem[]> {
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
  private getPagedData(data: EquiposTablaItem[]): EquiposTablaItem[] {
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
  private getSortedData(data: EquiposTablaItem[]): EquiposTablaItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.tipo, b.tipo, isAsc);
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
