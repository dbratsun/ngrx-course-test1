import { IRole } from "shared/model/role";
import { IUser } from "shared/model/user";
import { IApplication } from "shared/model/application";

export interface AllApplicationData {
    applications: IApplication[]
    roles: IRole[];
    users: IUser[];
}