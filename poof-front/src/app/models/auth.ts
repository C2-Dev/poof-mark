
/*
    classes used for auth service
*/

export class
JwtToken {
    access: string;
    refresh: string;
}

export class
LoginCredentials {
    username: string;
    password: string;

    constructor(un: string, pw: string) {
        this.username = un;
        this.password = pw;
    }
}