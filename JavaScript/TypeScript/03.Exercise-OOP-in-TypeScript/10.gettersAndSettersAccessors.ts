class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(val: string) {
        if(val.length < 3){
            throw new Error('Username must be minimum 3 characters long!')
        }
        this._username = val;
    }
}
const user = new User("jo");