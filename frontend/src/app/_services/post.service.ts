import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(page: any){
    const url = `http://localhost:8085/invoice/dashboard?field=createdDate&size=10&page=${page}`;
    return this.httpClient.get(url)

  }}
