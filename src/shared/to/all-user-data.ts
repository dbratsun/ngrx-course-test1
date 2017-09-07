import { Application } from "shared/model/application";
import { Role } from "shared/model/role";
import { User } from "shared/model/user";

export interface AllApplicationData {
    applications: Application[];
    roles: Role[];
    users: User[];
}