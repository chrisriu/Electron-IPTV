import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { config } from '../configs/auth.config';
import { User } from '../models';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const httpParams = new HttpParams().set('username', username).set('password', password);
        const endpoint = `${config.url}:${config.port}/player_api.php`;
        return this.httpClient.get(`${endpoint}`, { params: httpParams })
            .pipe(
                catchError(error => {
                    if (!(error.error instanceof ErrorEvent)) {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        if (error.status === 404) {
                            return of(true);
                        }
                        console.error(
                            `Backend returned code ${error.status}, ` +
                            `body was: ${error.error}`);
                    }
                    return of(false);
                }),
                map(res => { 
                    if( res['user_info']['status'] == 'Active'){
                        
                    }

                    return res['user_info'];
                })
            );
    }
    // login(username: string, password: string) {
    //     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.currentUserSubject.next(user);
    //             }

    //             return user;
    //         }));
    // }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}