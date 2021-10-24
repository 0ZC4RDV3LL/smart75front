import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelUserService {
  
  labelUser: string = '';

  constructor() { }
  
  
  public setlabelUser(s : string) {
    this.labelUser = s;
  }
  
  public getlabelUser(): string {
    return this.labelUser;
  }

}
