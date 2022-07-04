import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

interface LoginResponse {
  accessToken: string;
  data: any;
  email: string;
  status: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // API path
    basePath = 'http://localhost:8085/';
    tokenInfo:  any;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Something bad happened; please try again later.');
    }

      // Verify user credentials on server to get token
  loginForm(data: any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'login', data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );

  }

    // After login save token and other values(if any) in localStorage
    setUser(resp: LoginResponse) {
     // localStorage.setItem('name', resp.email);
      localStorage.setItem('access_token', resp.accessToken);
      this.router.navigate(['/dashboard']);
      this.tokenInfo = jwt_decode(resp.accessToken);
      if(this.tokenInfo.role === "SUPER_USER"){
        this.router.navigate(['/dashboread']);
      }
      else if(this.tokenInfo.role === "AUDITOR"){

        this.router.navigate(['/home/auditor']);

      }
      else if(this.tokenInfo.role === "USER"){

        this.router.navigate(['/home/user']);

      }
    }

    isLoggedIn() {
      return localStorage.getItem('access_token') != null;
    }

    // After clearing localStorage redirect to login screen
    logout() {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

      // Get data from server for Dashboard
  getData(data: any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'login', data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  get isSuperAdmin(): boolean {
    console.log(this.tokenInfo)
    return this.tokenInfo.role === "SUPER_USER" ? true : false;
  }
}
