import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from './api-endpoints';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(data: FormData): Observable<any> {
    return this.http.post(API_ENDPOINTS.PRODUCTS, data);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(API_ENDPOINTS.PRODUCTS);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.PRODUCTS}/${id}`);
  }

  updateProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${API_ENDPOINTS.PRODUCTS}/${id}`, data);
  }
}
