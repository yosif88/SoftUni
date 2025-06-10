var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class MockAuthorizationService {
    userRole;
    constructor(userRole) {
        this.userRole = userRole;
    }
    canViewData(property) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}
let mockAuthorizationService = new MockAuthorizationService('Guest');
function authorizeUser(authService) {
    return function (target, propName, descriptor) {
        const originalGetter = descriptor.get;
        descriptor.get = function () {
            const hasAccess = authService.canViewData(propName);
            if (!hasAccess) {
                throw new Error('You are not authorized to view this information');
            }
            return originalGetter?.call(this);
        };
        return descriptor;
    };
}
class User {
    _name;
    _age;
    _creditCardNumber;
    constructor(name, age, creditCardNumber) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get creditCardNumber() {
        return this._creditCardNumber;
    }
}
__decorate([
    authorizeUser(mockAuthorizationService),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "name", null);
__decorate([
    authorizeUser(mockAuthorizationService),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "age", null);
__decorate([
    authorizeUser(mockAuthorizationService),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "creditCardNumber", null);
const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);
export {};
//# sourceMappingURL=04.authorization.js.map