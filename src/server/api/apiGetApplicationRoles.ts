import { Application, Request, Response } from "express";
import { AllApplicationData } from '../../shared/to/all-application-data';
import { findDbRolesPerApplication } from "../persistence/findDbRolesPerApplication";
import * as _ from 'lodash';
import { IUser } from "../../shared/model/user";
import { IRole } from '../../shared/model/role';
import { IApplication } from '../../shared/model/application';
import { dbUsers, dbRoles, dbApplications } from '../db-data';

export function apiGetApplicationRoles(app: Application) {
    app.route('/api/roles').get((req: Request, res: Response) => {
        const applicationId = 1;
        const allApplications = _.values<IApplication>(dbApplications);
        const rolesPerApplication = findDbRolesPerApplication(applicationId);
        const allUsers: IUser[] = _.values<IUser>(dbUsers);

        let users: IUser[] = [],
            applicationIds: string[] = [];
        rolesPerApplication.forEach(role => {
            const roleUsers: IUser[] = _.filter(allUsers, user => _.includes(_.keys(role.users), user.id.toString()));
            users = users.concat(roleUsers)
        })

        

        const response: AllApplicationData = {
            applications: allApplications,
            roles: rolesPerApplication,
            users: _.uniq(users)   
        }

        res.status(200).json(response);
    })
}