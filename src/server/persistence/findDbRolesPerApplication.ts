import { IRole } from '../../shared/model/role';
import { dbRoles } from '../db-data';
import * as _ from 'lodash';

export function findDbRolesPerApplication(applicationId: number) {
    const allRoles: IRole[] = _.values<IRole>(dbRoles); 
    return _.filter(allRoles, ['applicationId', applicationId]);
}

