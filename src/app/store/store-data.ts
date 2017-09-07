import { IRole } from "shared/model/role";
import { IUser } from "shared/model/user";
import { IApplication } from "shared/model/application";

export interface StoreData {
    applications: {[key:number]: IApplication}
    roles: {[key: number]: IRole}
    users: {[key: number]: IUser}
}

export const INITIAL_STORE_DATA: StoreData = {
    applications: {},
    roles: {},
    users: {}
}