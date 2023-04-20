export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string
    passwordHash: string
}
