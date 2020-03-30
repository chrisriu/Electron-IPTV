import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    currentUser: User;
    constructor() { }
}