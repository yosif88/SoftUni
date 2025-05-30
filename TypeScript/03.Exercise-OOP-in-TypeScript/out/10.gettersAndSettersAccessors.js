"use strict";
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(val) {
        if (val.length < 3) {
            throw new Error('Username must be minimum 3 characters long!');
        }
        this._username = val;
    }
}
const user = new User("jo");
//# sourceMappingURL=10.gettersAndSettersAccessors.js.map