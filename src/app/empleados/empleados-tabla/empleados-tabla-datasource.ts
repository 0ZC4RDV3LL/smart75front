import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Empleados } from '../empleados';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Empleados[] = [
  {id: 1, nombre_completo: 'Hydrogen', email: '', telefono: '', rol: ''},
  {id: 2, nombre_completo: 'Helium', email: '', telefono: '', rol: ''},
  {id: 3, nombre_completo: 'Lithium', email: '', telefono: '', rol: ''},
  {id: 4, nombre_completo: 'Beryllium', email: '', telefono: '', rol: ''},
  {id: 5, nombre_completo: 'Boron', email: '', telefono: '', rol: ''},
  {id: 6, nombre_completo: 'Carbon', email: '', telefono: '', rol: ''},
  {id: 7, nombre_completo: 'Nitrogen', email: '', telefono: '', rol: ''},
  {id: 8, nombre_completo: 'Oxygen', email: '', telefono: '', rol: ''},
  {id: 9, nombre_completo: 'Fluorine', email: '', telefono: '', rol: ''},
  {id: 10, nombre_completo: 'Neon', email: '', telefono: '', rol: ''},
  {id: 11, nombre_completo: 'Sodium', email: '', telefono: '', rol: ''},
  {id: 12, nombre_completo: 'Magnesium', email: '', telefono: '', rol: ''},
  {id: 13, nombre_completo: 'Aluminum', email: '', telefono: '', rol: ''},
  {id: 14, nombre_completo: 'Silicon', email: '', telefono: '', rol: ''},
  {id: 15, nombre_completo: 'Phosphorus', email: '', telefono: '', rol: ''},
  {id: 16, nombre_completo: 'Sulfur', email: '', telefono: '', rol: ''},
  {id: 17, nombre_completo: 'Chlorine', email: '', telefono: '', rol: ''},
  {id: 18, nombre_completo: 'Argon', email: '', telefono: '', rol: ''},
  {id: 19, nombre_completo: 'Potassium', email: '', telefono: '', rol: ''},
  {id: 20, nombre_completo: 'Calcium', email: '', telefono: '', rol: ''},
];

/**
 * Data source for the EmpleadosTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpleadosTablaDataSource extends DataSource<Empleados> {
  // data: Empleados[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
   

  constructor(public data : Empleados[]) {
    super();
  }  

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Empleados[]> {
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
  private getPagedData(data: Empleados[]): Empleados[] {
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
  private getSortedData(data: Empleados[]): Empleados[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.nombre_completo, b.nombre_completo, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

  setEmpleadosData(data: Empleados[]): void {
    data.forEach(element => {
      this.data.push(element);
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
