import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManageResourceService {

  private readonly apiUrl: string = 'http://localhost:8081/api/v1';
  
  constructor(
    private http: HttpClient, 
    private router: Router) { }

  add(id: number) {
    return this.http.put(this.apiUrl + this.router.url.slice(0, -1) + "/add?id=" + id, {});
  }

  remove(id: number) {
    return this.http.delete(this.apiUrl + this.router.url.slice(0, -1) + "/remove?id=" + id);
  }

  getAvailable() {
    return this.http.get<any[]>(this.apiUrl + "/employee" + "/search");
  }
}