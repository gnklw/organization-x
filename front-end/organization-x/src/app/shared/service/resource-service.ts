import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T> {

  private readonly apiUrl: string = 'http://localhost:8081/api/v1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router) { }

  getAll(page: number) {
    return this.http.get<T[]>(this.apiUrl + this.router.url.slice(0, -1) + `/search?page=${page}`);
  }

  update(id: number, resourse: T): Observable<any> {
    console.log(this.router.url)
    return this.http.put(this.apiUrl + '/' + this.router.url.split('/')[1].slice(0, -1) + `/update?id=${id}`, JSON.stringify(resourse), this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + this.router.url.slice(0, -1) + `/delete?id=${id}`);
  }

  create(resource: T) {
    return this.http.post(this.apiUrl + this.router.url.slice(0, -1) + "/create", JSON.stringify(resource), this.httpOptions);
  }
}
