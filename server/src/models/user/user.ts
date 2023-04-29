export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    createdAt: Date;
}
