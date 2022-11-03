import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly apiUrl: string = 'http://localhost:8081/api/v1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router) { }

  registration(registrationData: any) {
    console.log(registrationData)
    return this.http.post<any>(this.apiUrl + '/registration', JSON.stringify(registrationData), this.httpOptions)
      .pipe(map(() => {
        this.router.navigate(['/signin']);
      }));
  }
}
