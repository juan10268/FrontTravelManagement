import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLRoute } from '../urlroute';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(private oHttpClient: HttpClient, private urlRoute: URLRoute) {}

    startAppLogin(oUser: User) {
        const userLogin: User = {
            userName: oUser.userName,
            password: oUser.password
        };
        return this.oHttpClient.post(this.urlRoute.getRoute + '', userLogin);
    }
}
