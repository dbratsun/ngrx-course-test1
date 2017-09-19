export interface IUser {
    id: number;
    name: string;
    fullName: string;
    created: number; 
}

export class User implements IUser {
    id: number;
    name: string;
    fullName: string;
    created: number; 
}

