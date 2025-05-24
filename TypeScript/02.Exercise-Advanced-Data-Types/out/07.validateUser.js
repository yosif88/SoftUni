"use strict";
function validateUser(user) {
    const validId = 'id' in user && (typeof user.id === 'number' && user.id > 100) ||
        (typeof user.id === 'string' && user.id.length === 14);
    const validUsername = 'username' in user &&
        typeof user.username === 'string' &&
        user.username.length >= 5 &&
        user.username.length <= 10;
    const validPassword = 'passwordHash' in user &&
        (typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
        (Array.isArray(user.passwordHash) &&
            user.passwordHash.every(p => typeof p === 'string' && p.length === 8) &&
            user.passwordHash.length === 4);
    // const validStatus = user.status === 'Locked' || user.status === 'Unlocked';
    const validStatus = 'status' in user &&
        typeof user.status === 'string' &&
        ['Locked', 'Unlocked'].includes(user.status);
    return validId && validUsername && validPassword && validStatus;
}
console.log(validateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(validateUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }));
console.log(validateUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(validateUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' }));
//# sourceMappingURL=07.validateUser.js.map