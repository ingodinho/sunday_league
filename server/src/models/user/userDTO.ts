export interface UserRegisterDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserLoginDTO {
    email: string;
    password: string;
}
