"use strict";
function assignTask(user, task) {
}
let user = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};
let task1 = {
    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus) { this.status = newStatus; }
};
let task2 = {
    status: 'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus) { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
};
assignTask(user, task1);
assignTask(user, task2);
//# sourceMappingURL=08.extractInterfaces.js.map