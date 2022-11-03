import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkSignStatus());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public username: string = '';
  public password: string = '';

  private readonly apiUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(username: string, password: string) {
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
    localStorage.setItem('signin', '1');

    //return this.http.get(this.apiUrl + '/signin',
      //{ headers: { authorization: 'Basic ' + window.btoa(username + ':' + password) } })
     // .pipe(map(() => {
       // this.loggedIn.next(true);
       // this.router.navigate(['/home']);
     // }))
  }

  signout() {
    this.loggedIn.next(false);
    localStorage.setItem('signin', '0');
    this.router.navigate(['/']);
  }

  checkSignStatus() {
    if (localStorage.getItem('signin') === '1') {
      return true;
    }

    return false;
  }
}
