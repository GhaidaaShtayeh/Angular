import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8085/invoice/dashboard';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) { }
  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }
  // other CRUD operations
}
