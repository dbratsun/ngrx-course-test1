export interface IApplication {
    id: number;
    name: string;
    roles: { [key:number]: number }
}

export class Application implements IApplication {
    id: number;
    name: string;
    roles: { [key:number]: number }
}

