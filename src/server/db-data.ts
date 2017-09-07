import { Application } from '../shared/model/application';
import { Role } from '../shared/model/role';
import { User } from "shared/model/user";

export const dbUsers: { [key: number]: User } = {
    1: {
        id: 1,
        name: 'Scott'
    },
    2: {
        id: 2,
        name: 'Alice'
    },
    3: {
        id: 3,
        name: 'Bob'
    }
}

export const dbRoles: { [key: number]: Role } = {
    1: {
        id: 1,
        applicationId: 1,
        name: 'Office administrator',
        users: {
            1: 1
        }
    },
    2: {
        id: 2,
        applicationId: 2,
        name: 'Designer administrator',
        users: {
            2: 0
        }
    },
    3: {
        id: 3,
        applicationId: 1,
        name: 'Office user',
        users: {
            1: 0,
            3: 0
        }
    }

}

export const dbApplications: { [key: number]: Application } = {
    1: {
        id: 1,
        name: 'Office',
        roles: {
            1: 0,
            3: 0
        }
    },
    2: {
        id: 2,
        name: 'Designer',
        roles: {
            2: 0
        }
    }
}