import { Injectable } from '@angular/core';
import currentLoans from './current-loans.json';


@Injectable({
  providedIn: 'root'
})
export class JSONDataService {
  
  private loans = currentLoans.loans;

  constructor() { }

  getLoans() {
    return this.loans;
  }



}
