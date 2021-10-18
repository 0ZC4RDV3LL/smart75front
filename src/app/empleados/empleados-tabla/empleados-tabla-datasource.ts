import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Empleados } from '../../interfaces/empleados';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Empleados[] = [
  {id: 1, nombre: 'Hydrogen', correo: '', telefono: '', rol: ''},
  {id: 2, nombre: 'Helium', correo: '', telefono: '', rol: ''},
  {id: 3, nombre: 'Lithium', correo: '', telefono: '', rol: ''},
  {id: 4, nombre: 'Beryllium', correo: '', telefono: '', rol: ''},
  {id: 5, nombre: 'Boron', correo: '', telefono: '', rol: ''},
  {id: 6, nombre: 'Carbon', correo: '', telefono: '', rol: ''},
  {id: 7, nombre: 'Nitrogen', correo: '', telefono: '', rol: ''},
  {id: 8, nombre: 'Oxygen', correo: '', telefono: '', rol: ''},
  {id: 9, nombre: 'Fluorine', correo: '', telefono: '', rol: ''},
  {id: 10, nombre: 'Neon', correo: '', telefono: '', rol: ''},
  {id: 11, nombre: 'Sodium', correo: '', telefono: '', rol: ''},
  {id: 12, nombre: 'Magnesium', correo: '', telefono: '', rol: ''},
  {id: 13, nombre: 'Aluminum', correo: '', telefono: '', rol: ''},
  {id: 14, nombre: 'Silicon', correo: '', telefono: '', rol: ''},
  {id: 15, nombre: 'Phosphorus', correo: '', telefono: '', rol: ''},
  {id: 16, nombre: 'Sulfur', correo: '', telefono: '', rol: ''},
  {id: 17, nombre: 'Chlorine', correo: '', telefono: '', rol: ''},
  {id: 18, nombre: 'Argon', correo: '', telefono: '', rol: ''},
  {id: 19, nombre: 'Potassium', correo: '', telefono: '', rol: ''},
  {id: 20, nombre: 'Calcium', correo: '', telefono: '', rol: ''},
];

/**
 * Data source for the EmpleadosTabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpleadosTablaDataSource extends DataSource<Empleados> {
  data: Empleados[] = EXAMPLE_DATA;
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
        case 'name': return compare(a.nombre, b.nombre, isAsc);
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
