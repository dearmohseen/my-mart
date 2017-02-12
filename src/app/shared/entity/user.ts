export class User {
    userId: number;
    userName: string;
    password: string;
    email: string;
    status: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    createdOn: string;

    constructor( userId: number,
        userName: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        status: string,
        createdOn: string ) {

        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.status = status;
        this.createdOn = createdOn;
    }

}
