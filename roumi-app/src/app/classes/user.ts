import * as internal from "stream";

export interface User {
    id?: number;
    name: string;
    gender: string;
    orientation: string;
    age: number;
    email: string;
    password: string;
    avatar: string;
}
