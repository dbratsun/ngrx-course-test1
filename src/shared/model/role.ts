export interface IRole {
    id: number;
    applicationId: number;
    name: string;
    users: { [key: number]: number }
}

export class Role implements IRole {
    id: number;
    applicationId: number;
    name: string;
    users: { [key: number]: number }
}

