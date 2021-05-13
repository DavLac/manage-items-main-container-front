
export const UserScopes = {
    ADMIN: {name: 'ADMIN', level: 0},
    CLIENT: {name: 'CLIENT', level: 1}
}

export const findLevelByName = (roleName) => {
    if(roleName === UserScopes.ADMIN.name) {
        return UserScopes.ADMIN.level;
    }

    return UserScopes.CLIENT.level;
}

export const adminData = {
    name: "admin",
    role: UserScopes.ADMIN.name,
    expirationTime: 60,
    refreshTokenTime: 86400
};
