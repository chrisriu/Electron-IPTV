import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { xcConfig } from '../configs/xc.api.config';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const httpParams = new HttpParams().set('username', username).set('password', password);
        const endpoint = `${xcConfig.url}:${xcConfig.port}/player_api.php`;
        return this.httpClient.get(`${endpoint}`, { params: httpParams })
            .pipe(
                catchError(error => {
                    if (!(error.error instanceof ErrorEvent)) {
                        if (error.status === 404) {
                            this.router.navigate(['/login-failed'], { queryParams: { case: "invalid_credit" } });
                        }
                        console.error(
                            `Backend returned code ${error.status}, ` +
                            `body was: ${error.error}`);
                    }
                    return of(false);
                }),
                map(res => {
                    if (res['user_info']['status'] == 'Active') {
                        const token = this.generateToken(`${res['user_info']['username']}`, `${res['user_info']['password']}`);
                        const object_token = { 'token': token };

                        // Merge token to UserInfo;
                        const user_info = { ...res['user_info'], ...object_token };

                        // Store Userinfo to local Storage;
                        localStorage.setItem('currentUser', JSON.stringify(user_info));
                        this.currentUserSubject.next(user_info);

                        res['user_info'] = user_info;
                    }
                    return res['user_info'];
                })
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    generateToken(a: string, b: string) {
        let outString: string = '';
        let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
            outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
        }
        outString = a + outString + b;
        return outString;
    }
}
